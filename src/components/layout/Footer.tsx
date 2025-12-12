export function Footer() {
    return (
        <footer className="py-8 border-t border-white/5 bg-black/50 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Ayush Gupta. All rights reserved.</p>
            <p className="mt-2 text-xs text-gray-600">Built with Next.js, TailwindCSS & Framer Motion</p>
        </footer>
    );
}
