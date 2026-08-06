import { ArrowUpRight } from 'lucide-react';
import React from 'react';

// # define the props for the social link
interface SocialLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const SocialLink = ({ href, children, className = "" }: SocialLinkProps) => {
    return (
        <a 
            href={href} 
            // # opens the link in a new tab
            target="_blank"

            rel="noopener noreferrer" 
            className={`font-[fira-mono] text-sm text-gray-600 md:text-sm inline-flex items-center justify-center gap-x-1 hover:opacity-80 transition-opacity ${className}`}
        >
            {children}
            <ArrowUpRight className='w-[12px] h-[12px]' />
        </a>
    );
};

export default SocialLink;