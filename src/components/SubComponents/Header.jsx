function Header({activeTitle, h2Title}) {
    return (
        <>
          <p className="fs-6 title">
            <b>{activeTitle}</b></p>                
            <h2 className="h3 display-7 fw-bold text-body-emphasis lh-1 mb-4 zero-top" >{h2Title}</h2>
        </>
    )
}

export default Header;