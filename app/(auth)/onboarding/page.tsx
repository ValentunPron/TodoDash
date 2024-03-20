import AccountProfile from '@/components/forms/AccountProfile'
import React from 'react'

function Page() {
  return (
    <main>
        <h2 className='titleText'>Filling out the profile</h2>

        <div className='onboarding'>
            <AccountProfile />
        </div>
    </main>
  )
}

export default Page