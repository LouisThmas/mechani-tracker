import { useState } from "react";

export default function CreateTirePage() {
    const [form, setForm] = useState({ q1: "", q2: "", q3: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async () => {
      try {
      const response = await fetch('http://localhost:3000/tires', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response data:', data);
        setForm({ q1: '', q2: '', q3: '' }); 
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
    }

    return (
        <>
            <input name="q1" value={form.q1} onChange={handleChange} />
            <input name="q2" value={form.q2} onChange={handleChange} />
            <input name="q3" value={form.q3} onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
            <p>current value {form.q1}</p>
        </>
  )
}