export default function MiniCard(props: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-foreground/50 rounded-xl p-6 shadow-sm transition-all duration-300 text-foreground max-w-64">
      <div className="w-14 h-14 rounded-lg bg-foreground/10 flex items-center justify-center text-primary-600">
        <i className="fas fa-paint-brush text-2xl"></i>
      </div>
      <h3 className="mt-4 text-xl font-semibold ">
        {props.title}
      </h3>
      <p className="mt-2">{props.description}</p>
    </div>
  );
}
