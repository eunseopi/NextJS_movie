// 메타 데이터는 page 나 layout 에만 있을 수 있다.
// 서버 컴포넌트에서만 있을 수 있다. client 컴포넌트에선 X
export const metadata ={
    title: 'About Us',
}

export default function AboutUsLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
            &copy; Next JS is great!
        </div>
    )
}
