import React from 'react';
import { Link } from 'react-router-dom';
import ProjectDetails from '../../Projects/ProjectDetails/ProjectDetails';

const HomeProjects = () => {
    const projectsData = [
        {
            id: 1,
            images:{
                image1: 'https://i.ibb.co/Y3fDdCq/Screenshot-2021-05-17-Kids-World-1.png',
                image2: 'https://i.ibb.co/r531YjG/Screenshot-2021-05-17-Kids-World-1.png',
                image3: 'https://i.ibb.co/w4GPtYX/Screenshot-2021-05-17-Kids-World.png'
            }
            ,
            title: 'Kids World – Educational Service Selling Website',
            features: [
                {feature: 'Responsive full-stack educational service selling website.'},
                {feature: 'An authenticated user can order his/her desired services.'},
                {feature: 'User can pay with a credit card and review our services.'},
                {feature: 'Admin / User Dashboard based on role. (Detected by Email)'},
                {feature: 'Admin can create new services and monitor placed orders.'}
            ],
            websiteLink: 'https://kids-world-ashikur.web.app/',
            gitHubLink: 'https://github.com/developerashikur01/kids-world-client',
            technologyUsed: [
                {name: 'React.js'},
                {name: 'Node.js'},
                {name: 'Express.js'},
                {name: 'MongoDB'},
                {name: 'Firebase'}
            ]
        },
        {
            id: 2,
            images:{
                image1: 'https://i.ibb.co/XZXNk68/Screenshot-2021-05-17-Daily-Cart-E-commerce-Site.png',
                image2: 'https://i.ibb.co/FWNK4Vy/Screenshot-2021-05-17-Daily-Cart-E-commerce-Site-1.png',
                image3: 'https://i.ibb.co/CvzXRm6/Screenshot-2021-05-17-Daily-Cart-E-commerce-Site-2.png'
            },
            title: 'Daily Cart – E-commerce Website',
            features: [
                {feature: 'Responsive full-stack e-commerce website.'},
                {feature: 'Google login system implemented.'},
                {feature: 'Authenticated user can order his / her desired products.'},
                {feature: 'Admin panel is included where admin can add products.'},
                {feature: 'Admin can delete and edit product information.'}
            ],
            websiteLink: 'https://daily-cart-ashikur.web.app/',
            gitHubLink: 'https://github.com/developerashikur01/daily-cart-client',
            technologyUsed: [
                {name: 'React.js'},
                {name: 'Node.js'},
                {name: 'Express.js'},
                {name: 'MongoDB'},
                {name: 'Firebase'}
            ]
        },
        {
            id: 3,
            images:{
                image1: 'https://i.ibb.co/8gC78dV/Screenshot-2021-05-17-Allied-Ride.png',
                image2: 'https://i.ibb.co/yk48DBV/Screenshot-2021-05-17-Allied-Ride-1.png',
                image3: 'https://i.ibb.co/kJc7JdH/Screenshot-2021-05-17-Allied-Ride-2.png'
            },
            title: 'Allied Ride – Ride Sharing Website',
            features: [
                {feature: 'Responsive react js ride sharing website.'},
                {feature: 'Email & password sign-in and Google sign-in implemented.'},
                {feature: 'Authenticated users can buy tickets for different rides.'},
                {feature: 'User can set destination including the date.'},
                {feature: 'Google map is also integrated.'}
            ],
            websiteLink: 'https://allied-ride.web.app/',
            gitHubLink: 'https://github.com/developerashikur01/allied-ride',
            technologyUsed: [
                {name: 'React.js'},
                {name: 'React Router'},
                {name: 'Bootstrap'},
                {name: 'Firebase'}
            ]
        },
        {
            id: 4,
            images:{
                image1: 'https://i.ibb.co/FwgCWvJ/Screenshot-2021-05-17-Explore-Football-Clubs.png',
                image2: 'https://i.ibb.co/cvDz9bV/Screenshot-2021-05-17-Explore-Football-Clubs-2.png',
                image3: 'https://i.ibb.co/RgFpz6N/Screenshot-2021-05-17-Explore-Football-Clubs-1.png'
            },
            title: 'Explore Football Clubs - Football Club Exploring Website',
            features: [
                {feature: 'Responsive React.js website.'},
                {feature: 'The Website shows Football Clubs.'},
                {feature: 'User can explore details about a club.'},
                {feature: 'Dynamic react routing is added.'},
                {feature: 'Dynamic API for clubs is used.'}
            ],
            websiteLink: 'https://explore-football-clubs.netlify.app/',
            gitHubLink: 'https://github.com/developerashikur01/explore-football-clubs',
            technologyUsed: [
                {name: 'React.js'},
                {name: 'React Router'},
                {name: 'React Bootstrap'},
                {name: 'CSS3'},
                {name: 'Netlify'}
            ]
        }
    ];
    return (
        <>
            <div className="container py-5">
                <h2 className='pt-4 text-center'>My Projects</h2>
                <div className="underline mb-5"></div>
                <div className="row d-flex justify-content-center">
                    {
                        projectsData.map(project => <ProjectDetails key={project.id} project={project}></ProjectDetails>)
                    }
                </div>
                <div className='text-center mt-3'>
                    <Link to="/projects" className='default-btn'>Show More</Link>
                </div>
            </div>
        </>
    );
};

export default HomeProjects;