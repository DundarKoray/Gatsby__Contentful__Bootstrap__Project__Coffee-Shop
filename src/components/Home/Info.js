import React from 'react';
import { Link } from 'gatsby'
import Title  from '../Global/Title'

const Info = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <Title title="our story"/>
                        <p className=" lead text-muted mb-5">
                        Blandit massa enim nec dui nunc mattis enim ut. Metus vulputate eu scelerisque felis imperdiet. A diam sollicitudin tempor id eu nisl nunc. Aenean vel elit scelerisque mauris pellentesque pulvinar. Ultricies mi quis hendrerit dolor magna. Nullam non nisi est sit amet facilisis magna etiam. Scelerisque purus semper eget duis at tellus. Auctor elit sed vulputate mi sit amet mauris. Nunc consequat interdum varius sit amet. 
                        </p>
                        <Link>
                            <button className="btn text-uppercase btn-yellow">
                                learn more   
                            </button> 
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;