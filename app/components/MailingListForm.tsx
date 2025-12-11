import React, { useState, FormEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  consent: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  consent?: string;
}

const MailingListForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    consent: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to receive promotional emails';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData to match JotForm's expected format
      const formPayload = new FormData();
      formPayload.append('formID', '253438036239055');
      formPayload.append('q4_name[first]', formData.firstName);
      formPayload.append('q4_name[last]', formData.lastName);
      formPayload.append('q3_email', formData.email);
      formPayload.append('q5_bySigning', 'I agree');
      formPayload.append('simple_spc', '253438036239055-253438036239055');
      formPayload.append('website', '');

      const response = await fetch('https://submit.jotform.com/submit/253438036239055', {
        method: 'POST',
        body: formPayload
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ firstName: '', lastName: '', email: '', consent: false });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mailing-list-form-container">
      <form className="mailing-list-form" onSubmit={handleSubmit}>
        {submitSuccess && (
          <div className="success-message" role="alert">
            Thank you for subscribing to Buck & Bloom's mailing list!
          </div>
        )}

        <div className="form-group">
          <label htmlFor="firstName" className="form-label">
            Name
          </label>
          <div className="name-inputs">
            <div className="input-wrapper">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`form-input ${errors.firstName ? 'error' : ''}`}
                placeholder="First Name"
                aria-label="First Name"
                aria-invalid={!!errors.firstName}
                aria-describedby={errors.firstName ? 'firstName-error' : undefined}
              />
              <span className="sublabel">First Name</span>
              {errors.firstName && (
                <span id="firstName-error" className="error-message" role="alert">
                  {errors.firstName}
                </span>
              )}
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`form-input ${errors.lastName ? 'error' : ''}`}
                placeholder="Last Name"
                aria-label="Last Name"
                aria-invalid={!!errors.lastName}
                aria-describedby={errors.lastName ? 'lastName-error' : undefined}
              />
              <span className="sublabel">Last Name</span>
              {errors.lastName && (
                <span id="lastName-error" className="error-message" role="alert">
                  {errors.lastName}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email <span className="required-indicator">*</span>
          </label>
          <div className="input-wrapper">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="example@example.com"
              aria-label="Email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              required
            />
            <span className="sublabel">example@example.com</span>
            {errors.email && (
              <span id="email-error" className="error-message" role="alert">
                {errors.email}
              </span>
            )}
          </div>
        </div>

        <div className="form-group">
          <div className="checkbox-wrapper flex-center-start">
            <label htmlFor="consent" className="checkbox-label">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="checkbox-input"
                aria-invalid={!!errors.consent}
                aria-describedby={errors.consent ? 'consent-error' : undefined}
              />
              <span className="checkbox-text">
                By signing up, you consent to receive promotional emails from Buck & Bloom. You can unsubscribe at any time. <span className="required-indicator">*</span>
              </span>
            </label>
            {errors.consent && (
              <span id="consent-error" className="error-message" role="alert">
                {errors.consent}
              </span>
            )}
          </div>
        </div>

        <div className="form-actions flex-center-center">
          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MailingListForm;