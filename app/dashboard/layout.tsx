import React from 'react'
import requireUserAuthenticate from '../utils/hooks';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/public/logo.png"
import DashboardLinks from '../components/DashboardLinks';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const DashboardLayout = async ({ children }: {
    children: React.ReactNode
}) => {

    const session = await requireUserAuthenticate();

    return (
        <>
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                {/* Sidebar start here */}
                <div className="hidden border-r bg-muted/40 md:block">
                    <div className="flex flex-col max-h-screen h-full gap-2">
                        <div className="h-14 flex items-center border-b px-4 lg:h-[60px] lg:px-6">
                            <Link href="/" className="flex items-center gap-2">
                                <Image src={Logo} alt="Logo" className="size-7" />
                                <p className="text-2xl font-bold">
                                    Invoice<span className="text-blue-600">Arvind</span>
                                </p>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                                <DashboardLinks />
                            </nav>
                        </div>
                    </div>
                </div>

                {/* navbar start here */}
                <div className="flex flex-col">
                    <header className='flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6'>

                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant={"outline"} size={"icon"} className='md:hidden'>
                                    <Menu className='size-5' />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side={"left"}>
                                <nav className='grid gap-2 mt-10'>
                                    <DashboardLinks />
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </header>
                </div>
            </div>
            {children}
        </>
    )
}

export default DashboardLayout