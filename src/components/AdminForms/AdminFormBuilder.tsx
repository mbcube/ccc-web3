"use client";

import React, { useState } from 'react';
import { database } from '@/lib/firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';

interface FormTemplate {
    title: string;
    fields: {
        description: string;
        startDate: string;
        endDate: string;
        twitterLink: string;
    };
}

const AdminFormBuilder: React.FC = () => {
    const [formTitle, setFormTitle] = useState('');
    const [formData, setFormData] = useState<FormTemplate['fields']>({
        description: '',
        startDate: '',
        endDate: '',
        twitterLink: '',
    });
    const [errors, setErrors] = useState({
        description: false,
        startDate: false,
        endDate: false,
        twitterLink: false,
    });

    const twitterUrlPattern = /^(https?:\/\/)?(www\.)?twitter\.com\/[a-zA-Z0-9_]{1,15}\/status\/\d+$/;

    const handleChange = (field: keyof FormTemplate['fields'], value: string) => {
        setFormData({ ...formData, [field]: value });
        setErrors({ ...errors, [field]: false });
    };

    const saveFormTemplate = async () => {
        const hasErrors = {
            description: !formData.description,
            startDate: !formData.startDate,
            endDate: !formData.endDate,
            twitterLink: !formData.twitterLink || !twitterUrlPattern.test(formData.twitterLink),
        };
        setErrors(hasErrors);

        if (Object.values(hasErrors).includes(true)) {
            alert("Please fill out all fields correctly.");
            return;
        }

        try {
            await setDoc(doc(database, 'formTemplates', formTitle), { title: formTitle, fields: formData });
            alert('Form template saved!');
            setFormTitle('');
            setFormData({ description: '', startDate: '', endDate: '', twitterLink: '' });
        } catch (error) {
            console.error('Error saving form:', error);
            alert('Failed to save form template.');
        }
    };

    return (
        <div className="p-6 bg-gray-300 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Create New Form</h2>
            <input
                type="text"
                value={formTitle}
                onChange={(e) => setFormTitle(e.target.value)}
                placeholder="Form Title"
                className="w-full p-2 border border-gray-500 rounded mb-4"
                required
            />

            <label>Description</label>
            <textarea
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                className="w-full p-2 border border-gray-500 rounded mt-1"
            />
            {errors.description && <p className="text-red-500 text-sm">Description is required.</p>}

            <label>Start Date</label>
            <input
                type="date"
                value={formData.startDate}
                onChange={(e) => handleChange('startDate', e.target.value)}
                className="w-full p-2 border border-gray-500 rounded mt-1"
            />
            {errors.startDate && <p className="text-red-500 text-sm">Start date is required.</p>}

            <label>End Date</label>
            <input
                type="date"
                value={formData.endDate}
                onChange={(e) => handleChange('endDate', e.target.value)}
                className="w-full p-2 border border-gray-500 rounded mt-1"
            />
            {errors.endDate && <p className="text-red-500 text-sm">End date is required.</p>}

            <label>Twitter Post Link</label>
            <input
                type="url"
                value={formData.twitterLink}
                onChange={(e) => handleChange('twitterLink', e.target.value)}
                className="w-full p-2 border border-gray-500 rounded mt-1"
                placeholder="https://twitter.com/username/status/1234567890"
            />
            {errors.twitterLink && <p className="text-red-500 text-sm">Please enter a valid Twitter post URL.</p>}

            <button onClick={saveFormTemplate} className="mt-4 p-2 bg-blue-700 text-white rounded">Save Form</button>
        </div>
    );
};

export default AdminFormBuilder;
