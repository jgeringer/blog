import React, { useState } from 'react';

const THIS_PAGE = "/contact";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "", 
        email: "",
        message: "", 
    });
    const [statusText, setStatusText] = useState("");
    
    const handleChange = event => {
        const key = event.target.name;
        const updatedFormValue = event.target.value;
        const newFormData = {...formData, [key]: updatedFormValue};
        setFormData(newFormData);
	};
    
    const handleSubmit = event => {
        event.preventDefault();
        
        const form = event.target;
        fetch(THIS_PAGE, {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                "form-name": form.getAttribute('name'),
                ...formData
            })
            	.toString()
        })
            .then(response => {
                if (!response.ok)
                    throw Error(response.statusText);

                const emptyForm = createEmptyForm(formData);
                setFormData(emptyForm);

                setStatusText("Thank you!");
            })
            .catch(error => setStatusText(`Error: ${error.message}`));
    };
    
    return (
        <>
        	<p>{statusText}</p>
            <form 
                name="contact-form"
                id="contact-form"
                method="POST"
            	onSubmit={e => handleSubmit(e)}
    			action={THIS_PAGE}
                data-netlify="true" 
                data-netlify-honeypot="bot-field" 
            >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact-form" />
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        name="email" 
                        value={formData.email}
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea 
                        name="message" 
                        value={formData.message}
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div>
                    <button 
                        type="submit" 
                        name="submit" 
                    >
                        Send Email
                    </button>
                </div>
            </form>
		</>
    );
};

export default ContactForm;
