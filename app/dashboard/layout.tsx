import React from 'react'
import requireUserAuthenticate from '../utils/hooks';
import Link from 'next/link';

const DashboardLayout = async ({ children }: {
    children: React.ReactNode
}) => {

    const session = await requireUserAuthenticate();

    return (
        <>
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                <div className="hidden border-r bg-muted/40 md:block">
                    <div className="flex flex-col max-h-screen h-full gap-2">
                        <div className="h-14 flex items-center border-b px-4 lg:h-[60px]lg:px-6">
                            <Link href='/' className='flex items-center'></Link>
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </>
    )
}

export default DashboardLayout