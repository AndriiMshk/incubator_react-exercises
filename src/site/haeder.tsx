
type HeaderType = {
    title: string
}

export const Header = (props: HeaderType) => {
    return (
        <>
            <h3>{props.title}</h3>
        </>
    )
}