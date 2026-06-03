import { useState } from 'react';


function ProjectCard({title , description , imgSrc , navId ,codeLink , demoLink, technologies , className}) {
    
    const [showLightbox, setShowLightbox] = useState(false);

    const handleShow = () => setShowLightbox(true);
    const handleClose = () => setShowLightbox(false);
    
    return (
        <>
        <div id={`proj${navId}`} style={{ marginBottom: '40px' }}></div>

         <div className="card off-white mb-8 pt-3" style={{ maxWidth: "100%" }}>

                    <div className={`row g-0 ${className}`}>
                        <div className="col-lg-7 col-12">

                            <img src={imgSrc} className="round mt-2 img-fluid" alt="..." 
                            onClick={handleShow}
                            style={{ cursor: 'pointer' }}/>
                        </div>

                        <div className="col-lg-5 col-12 px-4">

                        <div className="card-body text-center ">

                            <h2 className="card-title h3 display-7 fw-bold text-body-emphasis lh-1 mb-4">{title}</h2>
                            <p className="card-text fs-5 ">{description}</p>
                            <div className="d-flex justify-content-center ">
                                {technologies.map((tech, index) => (
                                    <p key={index} className="fs-6 mb-0  plink p-3">{tech}</p>
                                ))}
                            </div>
                            
                            
                            <div className="d-flex justify-content-around mt-4">
                            <a href={codeLink} target="_blank" className="text-decoration-none">
                            
                                <p className="fs-6 mb-0 me-2 plink ">Code
                                <svg style={{ height: "25px", margin: "5px" }} className="icon"viewBox=" 0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" > <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
                            </p>
                            </a>
                            <a href={demoLink} target="_blank" className="text-decoration-none">

                                <p className="fs-6 mb-0 me-2 plink">Demo
                                <svg style={{ height: "25px", margin: "5px" }} className="icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path  d="M13,1 C14.1046,1 15,1.89543 15,3 L15,13 C15,14.1046 14.1046,15 13,15 L3,15 C1.89543,15 1,14.1046 1,13 L1,3 C1,1.89543 1.89543,1 3,1 L13,1 Z M13,3 L3,3 L3,13 L13,13 L13,3 Z M6,5.98754 C6,5.18568 6.89643,4.70994 7.56049,5.15938 L10.534,7.17184 C11.12,7.56845 11.12,8.43155 10.534,8.82816 L7.56049,10.8406 C6.89642,11.2901 6,10.8143 6,10.0125 L6,5.98754 Z"></path> </g></svg>
                            </p>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

             {/* Lightbox Modal */}
             {showLightbox && (
                <div
                    className="modal show d-block"
                    tabIndex="-1"
                    onClick={handleClose}
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Transparent black background
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 1050, // Ensure modal is on top
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '90%' }}>
                        <div className="modal-content bg-transparent border-0">
                            <div className="modal-body p-0">
                                {/* Enlarged Image */}
                                <img
                                    src={imgSrc}
                                    alt="Project Full View"
                                    className="img-fluid"
                                    style={{ maxHeight: '90vh', width: 'auto' }}
                                />
                            </div>
                            {/* Close Button */}
                            <button
                                type="button"
                                className="btn-close position-absolute top-0 end-0 m-3"
                                aria-label="Close"
                                onClick={handleClose}
                                style={{ filter: 'invert(1)' }} // Makes the close button white
                            ></button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProjectCard