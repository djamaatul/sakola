export function Footer(props: { createYear?: string; name?: string }) {
  return (
    <footer className="text-center text-gray-600 py-6 border-t">
      © {props.createYear ?? ""} {props.name ?? "null"}. All rights reserved.
    </footer>
  );
}
