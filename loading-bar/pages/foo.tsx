import React from 'react'
import Link from 'next/link'

interface Props {}

const Foo: React.FC<Props> = () => {
    return (
        <div>
            <main>
                <p>Page Foo</p>
                <Link href="/">Go to Home</Link>
            </main>
        </div>
    )
}

export default Foo
