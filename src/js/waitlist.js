  const IS_FILE_ORIGIN = window.location.protocol === 'file:' || window.location.origin === 'null';
  const API_BASE = 'https://api.grantpropel.com';
  const WAITLIST_ENDPOINT = new URL('/api/waitlist/', API_BASE).toString();
  const waitlistForm = document.getElementById('waitlist-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const submitButton = document.getElementById('submit-btn');
  const formContent = document.getElementById('form-content');
  const successState = document.getElementById('success-state');
  const formStatus = document.getElementById('form-status');
  const radios = document.querySelectorAll('.radio-option');

  function submitFileOriginFallback(fields) {
    let transportFrame = document.getElementById('waitlist-transport-frame');
    if (!transportFrame) {
      transportFrame = document.createElement('iframe');
      transportFrame.id = 'waitlist-transport-frame';
      transportFrame.name = 'waitlist-transport-frame';
      transportFrame.hidden = true;
      document.body.appendChild(transportFrame);
    }

    const transportForm = document.createElement('form');
    transportForm.method = 'POST';
    transportForm.action = WAITLIST_ENDPOINT;
    transportForm.target = transportFrame.name;
    transportForm.hidden = true;

    Object.entries(fields).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      transportForm.appendChild(input);
    });

    document.body.appendChild(transportForm);
    transportForm.submit();
    transportForm.remove();
  }

  function setFormStatus(message, tone) {
    formStatus.textContent = message;
    formStatus.className = 'form-status';

    if (tone) {
      formStatus.classList.add(tone);
    }
  }

  radios.forEach(option => {
    const input = option.querySelector('input[type="radio"]');
    input.addEventListener('change', () => {
      radios.forEach(o => o.classList.remove('selected'));
      if (input.checked) option.classList.add('selected');
    });
    option.addEventListener('click', () => {
      input.checked = true;
      radios.forEach(o => o.classList.remove('selected'));
      option.classList.add('selected');
    });
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const orgType = document.querySelector('input[name="org_type"]:checked');

    if (!name) {
      setFormStatus('Please enter your name.', 'error');
      nameInput.focus();
      return;
    }

    if (!emailInput.checkValidity()) {
      setFormStatus('Please enter a valid email address.', 'error');
      emailInput.focus();
      return;
    }

    if (!orgType) {
      setFormStatus('Please select your organization type.', 'error');
      return;
    }

    submitButton.disabled = true;
    setFormStatus('Joining the waitlist...', null);

    try {
      const requestFields = {
        name,
        email,
        org_type: orgType.value
      };

      if (IS_FILE_ORIGIN) {
        submitFileOriginFallback(requestFields);
        formContent.style.display = 'none';
        successState.style.display = 'block';
        setFormStatus('You are on the waitlist.', 'success');

        if (window.AhrefsAnalytics != null) {
          window.AhrefsAnalytics.sendEvent('waitlist_signup', {
            props: { org_type: orgType.value }
          });
        }
        return;
      }

      const requestBody = new URLSearchParams(requestFields);

      const response = await fetch(WAITLIST_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json'
        },
        body: requestBody
      });

      let payload = null;
      try {
        payload = await response.json();
      } catch (parseError) {
        payload = null;
      }

      if (!response.ok) {
        const errorMessage = payload && typeof payload.message === 'string'
          ? payload.message
          : 'Something went wrong. Please try again.';
        throw new Error(errorMessage);
      }

      formContent.style.display = 'none';
      successState.style.display = 'block';
      setFormStatus(payload && payload.message ? payload.message : 'You are on the waitlist.', 'success');

      if (window.AhrefsAnalytics != null) {
        window.AhrefsAnalytics.sendEvent('waitlist_signup', {
          props: { org_type: orgType.value }
        });
      }
    } catch (error) {
      setFormStatus(error.message || 'Something went wrong. Please try again.', 'error');
    } finally {
      submitButton.disabled = false;
    }
  }

  waitlistForm.addEventListener('submit', handleSubmit);

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
