import React from 'react';
import './contactus.css';

export default function ContactUs () {
  return (
    <>
      <section className='ftco-section'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-12'>
              <div className='wrapper'>
                <div className='row no-gutters'>
                  <div className='col-lg-6'>
                    <div className='contact-wrap w-100 p-md-5 p-4'>
                      <h3>Get In Touch</h3>
                      <p className='mb-4'>
                        We're open for any suggestion or just to have a chat after all, Life is short and the World is Wide
                      </p>
                      <div id='form-message-warning' className='mb-4' />
                      <div id='form-message-success' className='mb-4'>
                        Your message was sent, thank you!
                      </div>
                      <div className='row mb-4'>
                        <div className='col-md-4'>
                          <div className='dbox w-100 d-flex align-items-start'>
                            <div className='text'>
                              <p>
                                <span>Address:</span> Nairobi, Kenya
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-4'>
                          <div className='dbox w-100 d-flex align-items-start'>
                            <div className='text'>
                              <p>
                                <span>Email:</span> <a href='mailto:Hi@thefeastify.com'>Hi@thefeastify.com</a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-4'>
                          <div className='dbox w-100 d-flex align-items-start'>
                            <div className='text'>
                              <p>
                                <span>Phone:</span> <a href='#'>+ 254711 749 149</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <form method='POST' id='contactForm' name='contactForm'>
                        <div className='row'>
                          <div className='col-md-12'>
                            <div className='form-group'>
                              <input
                                type='text' className='form-control border-2' name='name' id='name' placeholder='Name'
                                style={{ borderColor: '#FB9D00' }}
                              />
                            </div>
                          </div>
                          <div className='col-md-12'>
                            <div className='form-group'>
                              <input type='email' className='form-control border-2' name='email' id='email' placeholder='Email'
                              style={{ borderColor: '#FB9D00' }}/>
                            </div>
                          </div>
                          <div className='col-md-12'>
                            <div className='form-group'>
                              <input type='text' className='form-control border-2' name='subject' id='subject' placeholder='Subject'
                              style={{ borderColor: '#FB9D00' }}/>
                            </div>
                          </div>
                          <div className='col-md-12'>
                            <div className='form-group'>
                              <textarea
                                name='message'
                                className='form-control border-2'
                                id='message'
                                cols='30'
                                rows='4'
                                placeholder='Create a message here'
                               style={{ borderColor: '#FB9D00' }}/>
                            </div>
                          </div>
                          <div className='col-md-12'>
                            <div className='form-group'>
                              <input type='submit' value='Send Message' className='btn btn-primary' />
                              <div className='submitting' />
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className='w-100 social-media mt-5'>
                        <h3>Follow us here</h3>
                        <p>
                          <a href='#'>Facebook</a>
                          <a href='https://www.linkedin.com/company/thefeastify/'>Linkedin</a>
                          <a href='#'>Instagram</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 d-flex align-items-stretch'>
                    <div
                      className='info-wrap w-100 p-5 img'
                      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
