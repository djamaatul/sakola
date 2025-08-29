import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	console.log("🌱 Start seeding...");

	// --- Roles
	const adminRole = await prisma.roles.create({
		data: { name: "ADMIN" },
	});
	const teacherRole = await prisma.roles.create({
		data: { name: "TEACHER" },
	});
	const studentRole = await prisma.roles.create({
		data: { name: "STUDENT" },
	});

	// --- Users
	const userAdmin = await prisma.users.create({
		data: {
			name: "Admin User",
			email: "admin@example.com",
			password: "hashed_password", // 👉 pakai bcrypt di real app
			status: "ACTIVE",
			user_roles: {
				create: {
					role_id: adminRole.id,
				},
			},
		},
		include: { user_roles: true },
	});

	await prisma.users.create({
		data: {
			name: "Teacher User",
			email: "teacher@example.com",
			password: "hashed_password",
			status: "ACTIVE",
			user_roles: {
				create: {
					role_id: teacherRole.id,
				},
			},
		},
		include: { user_roles: true },
	});

	const userStudent = await prisma.users.create({
		data: {
			name: "Student User",
			email: "student@example.com",
			password: "hashed_password",
			status: "ACTIVE",
			user_roles: {
				create: {
					role_id: studentRole.id,
				},
			},
		},
		include: { user_roles: true },
	});

	// --- School
	const school = await prisma.schools.create({
		data:
		{
			name: "SMK PUI Majalengka",
			slogan: `IQRO "Inteligence, Quality, Responsible, Optimism"`,
			logo: "https://b4faczjma6ztakdv.public.blob.vercel-storage.com/LOGO-removebg-preview.png",
			background: "https://b4faczjma6ztakdv.public.blob.vercel-storage.com/sma.jpg",
			color: "#c17f37",
			status: "ACTIVE",
		},
	});

	await prisma.schools.create({
		data: {
			name: "MTS Darul Falah Cijati",
			slogan: `Sekolah unggulan akreditasi A"`,
			logo: "https://b4faczjma6ztakdv.public.blob.vercel-storage.com/292884140_563867582108476_8442880038840676682_n-removebg-preview.png",
			background: "https://b4faczjma6ztakdv.public.blob.vercel-storage.com/471682728_1121739536321275_2888040820993252309_n.jpg",
			color: "#56351d",
			status: "ACTIVE",

		}
	})

	// --- Teacher Type
	const mathType = await prisma.teacher_types.create({
		data: { name: "Mathematics" },
	});

	// --- Teacher
	const teacher = await prisma.teachers.create({
		data: {
			name: "Mr. Smith",
			school_id: school.id,
			teacher_type_id: mathType.id,
		},
	});

	// --- Class
	const class1 = await prisma.classes.create({
		data: {
			class: "10A",
			school_id: school.id,
		},
	});

	// --- Student
	const student = await prisma.students.create({
		data: {
			name: "John Doe",
			school_id: school.id,
		},
	});

	// --- StudentClass
	await prisma.student_classes.create({
		data: {
			student_id: student.id,
			class_id: class1.id,
			vice_teacher_id: teacher.id,
			start_date: new Date("2025-01-01"),
		},
	});

	// --- News
	await prisma.news_schools.create({
		data: {
			school_id: school.id,
			title: "Welcome to Semester 2",
			content: "We are excited to start the new semester!",
		},
	});

	// --- Activity
	await prisma.activity_schools.create({
		data: {
			school_id: school.id,
			title: "Math Olympiad",
			content: "Annual competition",
			start_date: new Date("2025-06-01"),
			end_date: new Date("2025-06-05"),
		},
	});

	// --- Contact
	const contact = await prisma.contacts.create({
		data: { name: "Phone" },
	});

	await prisma.contact_schools.create({
		data: {
			school_id: school.id,
			contact_id: contact.id,
			value: "+62-81234567890",
		},
	});

	// --- Bucket (file upload)
	await prisma.buckets.create({
		data: {
			user_id: userAdmin.id,
			name: "profile.png",
			url: "https://s3.amazonaws.com/mybucket/profile.png",
		},
	});

	// --- Transaction
	await prisma.user_transactions.create({
		data: {
			user_id: userStudent.id,
			school_id: school.id,
			start_date: new Date("2025-01-01"),
			end_date: new Date("2025-12-31"),
		},
	});

	await prisma.messages.createMany({
		data: [
			{
				school_id: school.id,
				name: "Alice",
				email: "alice@example.com",
				message: "Halo, saya ingin tahu info penerimaan siswa baru.",
			},
			{
				school_id: school.id,
				name: "Bob",
				email: "bob@example.com",
				message: "Apakah ada beasiswa untuk siswa berprestasi?",
			},
			{
				school_id: school.id,
				name: "Charlie",
				email: "charlie@example.com",
				message: "Mohon informasi jadwal kegiatan sekolah bulan depan.",
			},
		],
	});


	console.log("✅ Seeding finished.");
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
