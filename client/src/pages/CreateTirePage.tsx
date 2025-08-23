import { useState } from "react";

export default function CreateTirePage() {
    const [form, setForm] = useState({ owner: {name: ""}, brand: "", model: "", size: {type: "", width: 0, ratio: 0, radius: 0}, type: "", tread: 0, rim: false });

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    // };

    // CHANGE THIS ASAP THIS IS BUNS
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setForm(prev => {
            const keys = name.split(".");
            if (keys.length === 1) {
            return { ...prev, [keys[0]]: value };
            } else if (keys.length === 2) {
            return {
                ...prev,
                [keys[0]]: {
                ...prev[keys[0] as keyof typeof prev] as any,
                [keys[1]]: value
                }
            };
            }
            return prev;
        });
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
        // setForm({ q1: '', q2: '', q3: '' }); 
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
    }

    return (
        <>
            <label>Customer name
                <input name="owner.name" value={form.owner.name} onChange={handleChange} />
            </label>
            <label>Tire Brand
                <input name="brand" value={form.brand} onChange={handleChange} />
            </label>
            <label>Tire model
                <input name="model" value={form.model} onChange={handleChange} />
            </label>
            <label>Size
                <input name="size.type" value={form.size.type} onChange={handleChange} />
                <input name="size.width" value={form.size.width} onChange={handleChange} />
                <input name="size.ratio" value={form.size.ratio} onChange={handleChange} />
                <input name="size.radius" value={form.size.radius} onChange={handleChange} />
            </label>
            <label>Tire Type
                <input name="type" value={form.type} onChange={handleChange} />
            </label>
            <label>Tire tread
                <input name="tread" value={form.tread} onChange={handleChange} />
            </label>
            <label>Rim?
                <input name="q10" type="radio" value='true' onChange={() => {setForm(() => ({...form, rim: true}))}} />
                <input name="q10" type="radio" value='false' onChange={() => {setForm(() => ({...form, rim: false}))}} />
            </label>
            <button onClick={handleSubmit}>Submit</button>
        </>
  )
}