type FooterType ={
    title: string
}

export const Footer = (props: FooterType) => {
    return (
        <h3>{props.title}</h3>
    )
}