import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2 className='text-center'>Terms & Conditions</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias magni debitis aspernatur, nihil est similique ipsum. Veniam, cum vitae. Ipsam expedita aspernatur omnis corrupti accusamus dicta at voluptatem quis vero itaque odit, animi enim ducimus officiis illo amet error dignissimos sequi iure? Dignissimos ut eaque exercitationem, odit molestiae quaerat repudiandae nostrum quo animi placeat cumque aliquid commodi repellat sed voluptatem quibusdam optio officia inventore cum praesentium natus excepturi possimus sint eius. Alias quisquam asperiores quasi, quibusdam sit fugit, quo repellendus culpa ab id dolore corrupti, odio velit eveniet ipsa! Omnis, in harum suscipit doloremque aliquam dignissimos non magnam molestias sit?</p>
            <br />
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iste dignissimos fugit libero dolore, eaque rem nisi itaque ducimus qui dolorem fugiat! Doloribus, consequuntur quis, corporis soluta amet quae facere eaque, animi suscipit quaerat itaque saepe accusantium rem fugit necessitatibus molestias dignissimos debitis atque quidem corrupti. Deleniti aut sunt cumque!
            </p>
            <span>Go Back to <Link to='/register'>Registration</Link></span>
        </div>
    );
};

export default TermsAndConditions;