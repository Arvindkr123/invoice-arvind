import React from 'react'
import { signOut } from '../utils/auth'
import requireUserAuthenticate from '../utils/hooks';
import { Button } from '@/components/ui/button';

const Dashboard = async () => {
    const session = await requireUserAuthenticate();
    console.log(session)

    return (
        <div>Dashboard
            <form action={async () => {
                "use server"
                await signOut()
            }}
                className='flex flex-col gap-y-4'>

                <Button>SignOut</Button>
            </form>
        </div>
    )
}

export default Dashboard