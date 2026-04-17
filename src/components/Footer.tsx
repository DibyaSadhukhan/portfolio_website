import { portfolioData } from '@/data/content';

export default function Footer() {
    return (
        <footer className="bg-[#080806] py-12 border-t border-gray-900/80 text-center">
            <p className="text-gray-500 text-sm font-mono hover:text-gray-300 transition duration-300 cursor-default">
                <span className="text-purple-500">return</span> "{portfolioData.name} © {new Date().getFullYear()}"
            </p>
        </footer>
    );
}
