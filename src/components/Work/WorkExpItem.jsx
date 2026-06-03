function WorkExpItem({icon, title, date, description}) {
    return (
        <div className="col-12 col-xl-6 d-flex align-items-start mt-4 ">
            
            <div className=" icon-square text-body-emphasis bg-white start d-inline-flex fs-4 flex-shrink-0 me-3">
             {icon}
            </div>

          <div>
            <p className="fs-6 start pcon"><b>{title}</b></p>
            <p className="fs-5 start">{date}</p>
            <p className="fs-5 text-start">{description}</p>
        </div>
        </div>
    )
}

export default WorkExpItem;