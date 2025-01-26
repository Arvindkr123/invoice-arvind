"use client";
import { cn } from '@/lib/utils';
import { HomeIcon, User2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


export const DashboardLinksArray = [
    {
        id: 0,
        name: 'Dashboard',
        href: "/dashboard",
        icon: HomeIcon
    },
    {
        id: 1,
        name: 'Invoices',
        href: "/dashboard/invoices",
        icon: User2
    },
]

const DashboardLinks = () => {

    const pathname = usePathname();
    return (
        <>
            {
                DashboardLinksArray?.map((link) => {
                    return <Link className={cn(pathname === link.href ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground", "flex items-center gap-3 px-3 py-2 rounded-md transition-all hover:text-primary ")} href={link.href} key={link.id}>
                        <link.icon className='size-4' />
                        {link?.name}
                    </Link>
                })
            }
        </>
    )
}

export default DashboardLinks