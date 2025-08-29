type Props = {
  title: string;
  action: string;
  description: string;
};
export default function Card({ title, action, description }: Props) {
  return (
    <div className="bg-foreground/50 rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 max-w-60">
      <div className="h-48 bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center">
        <i className="fas fa-graduation-cap text-white text-6xl"></i>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <a href="#" className="mt-4 inline-block text-primary-600 font-medium">
          {action}
        </a>
      </div>
    </div>
  );
}
