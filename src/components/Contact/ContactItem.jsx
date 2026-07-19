function ContactItem({ icon, title, detail, link }) {
    return (
        <div className="col d-flex align-items-start mt-5">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center flex-shrink-0 me-3">
                {icon}
            </div>
            <div>
                <p className="start fs-6 pcon pcon"><b>
                    {title}
                </b>
                </p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="plink">
                    <p className="fs-5 text-start plink">
                        {detail}
                    </p>
                </a>
            </div>
        </div>
    );
}

export default ContactItem;
