import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';

import { FaFacebook, FaTiktok, FaInstagram, FaGithub, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';

import { useState } from 'react';

import './App.css';



function WelcomeScreen() {

  return (

    <div className='home-page'>

      <h1 className='proto'>Portfolio<span className='x'>X</span></h1>

      <h3 className='fut'>The future of building professional CVs</h3>

      <Link to="/home" className='link'>Start your journey</Link>

    </div>

  );

}

function Home() {

  return (

    <div className="main-layout">



      <header className="main-header">

        <h3 className="logo">Portfolio<span>X</span></h3>

        <Link to="/form" className="nav-btn">Create Your CV</Link>

      </header>





      <div className="content">

        <img src="./image.jpg" alt="PortfolioX" className='img'/>

        <div className="some">

          <h2>Create your professional CV with Portfolio<span>X</span></h2>

          <p>

            Build your professional identity in minutes. Organize your experience,

            skills, and education into a high-quality template ready for printing or sharing.

          </p>

        </div>

      </div>



      <div className="about-section">

        <h2>About Us</h2>

        <p>PortfolioX is your digital partner in building a professional identity that stands out in the global market.</p>

      </div>



      <div className="features-section">

        <h2 className="section-title">Why Choose Portfolio<span>X</span>?</h2>

        <div className="features-grid">

          <div className="feature-card">

            <h3>⚡Real-time Builder</h3>

            <p>Your changes are updated instantly, allowing you to see exactly how your CV looks with zero latency.</p>

          </div>

          <div className="feature-card">

            <h3> 🤖ATS Friendly</h3>

            <p>Our structures and typography are specifically designed to easily pass through hiring algorithms.</p>

          </div>

          <div className="feature-card">

            <h3> 🖨️ High-Quality Export</h3>

            <p>Generate precise, beautiful PDFs that look pristine when printed or attached to emails.</p>

          </div>

        </div>

      </div>



      <div className="steps-section">

        <h2 className="section-title">How It <span>Works</span></h2>

        <div className="steps-container">

          <div className="step-item">

            <h3> <span className="num">1</span>- Fill Your Info</h3>

            <p>Enter your professional summary, work history, and educational status inside our clean form.</p>

          </div>

          <div className="step-item">

            <h3> <span className="num">2</span>- Upload Profile Pic</h3>

            <p>Add a professional, clear photograph of yourself to stand out directly on the dynamic sidebar.</p>

          </div>

          <div className="step-item">

            <h3> <span className="num">3</span>- Download & Land Jobs</h3>

            <p>Hit the export button, get your tailored layout as a file, and start applying globally.</p>

          </div>

        </div>

      </div>





      <footer>

        <h3 className='foot'>Portfolio<span>X</span></h3>

        <p className='p'>Your Perfect Platform To Create your CV</p>

        <div className="social-container">

          <a href="https://facebook.com" className="social-icon"><FaFacebook /></a>

          <a href="https://tiktok.com" className="social-icon"><FaTiktok /></a>

          <a href="https://instagram.com" className="social-icon"><FaInstagram /></a>

          <a href="https://github.com" className="social-icon"><FaGithub /></a>

        </div>

        <p className='conc'>Made With Love By <span className='name'>Ibrahim Ashraf</span></p>

      </footer>

    </div>

  );

}

function Form() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    photo: '',

    fullName: '',

    jobTitle: '',

    address: '',

    phone: '',

    email: '',

    website: '',

    education1: '',

    education2: '',

    experience1_title: '',

    experience1_desc: '',

    experience2_title: '',

    experience2_desc: '',

    skills: '',

    interests: ''

  });



  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

  };



  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (file) {

      const reader = new FileReader();

      reader.onloadend = () => {

        setFormData({ ...formData, photo: reader.result });

      };

      reader.readAsDataURL(file);

    }

  };



  const handleSubmit = (e) => {

    e.preventDefault();

    navigate('/cv', { state: { formData } });

  };



  return (

    <div className="form-wrapper">

        <h2 className="form-title">Enter Your Professional Data</h2>

        <form onSubmit={handleSubmit} className="cv-form">

            <div className="form-section">

                <h3>Profile Photo</h3>

                <input type="file" accept="image/*" onChange={handleImageChange} className="file-input" />

                {formData.photo && <img src={formData.photo} alt="Preview" className="img-preview" />}

            </div>



            <div className="form-section">

                <h3>Basic Information</h3>

                <input type="text" name="fullName" placeholder="Full Name" required value={formData.fullName} onChange={handleChange} />

                <input type="text" name="jobTitle" placeholder="Professional Title (e.g. Frontend Developer)" required value={formData.jobTitle} onChange={handleChange} />

            </div>



            <div className="form-section">

                <h3>Contact Details</h3>

                <input type="text" name="address" placeholder="Address (e.g. Cairo, Egypt)" value={formData.address} onChange={handleChange} />

                <input type="text" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} />

                <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} />

                <input type="text" name="website" placeholder="LinkedIn or Website URL" value={formData.website} onChange={handleChange} />

            </div>



            <div className="form-section">

                <h3>Education</h3>

                <input type="text" name="education1" placeholder="University, Degree & Date" value={formData.education1} onChange={handleChange} />

                <input type="text" name="education2" placeholder="Secondary Education (Optional)" value={formData.education2} onChange={handleChange} />

            </div>



            <div className="form-section">

                <h3>Work Experience</h3>

                <input type="text" name="experience1_title" placeholder="Job Title & Company (Date)" value={formData.experience1_title} onChange={handleChange} />

                <textarea name="experience1_desc" placeholder="Describe your responsibilities..." value={formData.experience1_desc} onChange={handleChange}></textarea>

               

                <input type="text" name="experience2_title" placeholder="Previous Job Title & Company" value={formData.experience2_title} onChange={handleChange} />

                <textarea name="experience2_desc" placeholder="Responsibilities..." value={formData.experience2_desc} onChange={handleChange}></textarea>

            </div>



            <div className="form-section">

                <h3>Skills & Interests</h3>

                <input type="text" name="skills" placeholder="Skills (e.g. React, JavaScript, UI/UX)" value={formData.skills} onChange={handleChange} />

                <input type="text" name="interests" placeholder="Interests (e.g. Photography, Traveling)" value={formData.interests} onChange={handleChange} />

            </div>



            <button type="submit" className="submit-btn">Generate Professional CV</button>

        </form>

    </div>

  );

}



function CVPage() {

  const location = useLocation();

  const data = location.state?.formData || {};



  return (

    <div className="cv-page-bg">

        <div className="cv-preview-container">

            <div className="cv-left-column">

                {data.photo && (

                <div className="cv-photo-container">

                    <img src={data.photo} alt="Profile" className="cv-photo" />

                </div>

                )}



                <div className="cv-section">

                    <h4>CONTACT</h4>

                    <p><FaMapMarkerAlt style={{ marginRight: '8px', color: '#555' }} /> {data.address}</p>

                    <p><FaPhoneAlt style={{ marginRight: '8px', color: '#555' }} /> {data.phone}</p>

                    <p><FaEnvelope style={{ marginRight: '8px', color: '#555' }} /> {data.email}</p>

                    {data.website && <p><FaGlobe style={{ marginRight: '8px', color: '#555' }} /> {data.website}</p>}

                </div>



                <div className="cv-section">

                    <h4>EDUCATION</h4>

                    <p className="cv-sub-title">{data.education1}</p>

                    {data.education2 && <p className="cv-sub-title" style={{marginTop:'10px'}}>{data.education2}</p>}

                </div>

            </div>



            <div className="cv-right-column">

                <div className="cv-header-name">

                    <h1>{data.fullName || "YOUR NAME"}</h1>

                    <h3>{data.jobTitle || "YOUR PROFESSION"}</h3>

                </div>



                <div className="cv-section">

                    <h4>JOB EXPERIENCE</h4>

                    <div className="exp-item">

                        <p className="cv-sub-title">{data.experience1_title}</p>

                        <p className="cv-desc">{data.experience1_desc}</p>

                    </div>

                    {data.experience2_title && (

                        <div className="exp-item" style={{marginTop: '20px'}}>

                            <p className="cv-sub-title">{data.experience2_title}</p>

                            <p className="cv-desc">{data.experience2_desc}</p>

                        </div>

                    )}

                </div>



                <div className="cv-section">

                    <h4>SKILLS</h4>

                    <p className="cv-desc">{data.skills}</p>

                </div>



                <div className="cv-section">

                    <h4>INTERESTS</h4>

                    <p className="cv-desc">{data.interests}</p>

                </div>

            </div>

        </div>

        <button className="print-btn" onClick={() => window.print()}>Save CV as PDF</button>

    </div>

  );

}



function App() {

  return (

    <BrowserRouter basename={import.meta.env.BASE_URL}>

      <Routes>

        <Route path='/' element={<WelcomeScreen />} />

        <Route path='/home' element={<Home />}/>

        <Route path='/form' element={<Form />}/>

        <Route path='/cv' element={<CVPage />}/>

      </Routes>

    </BrowserRouter>

  );

}



export default App; 

