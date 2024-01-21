import React, { useEffect, useState } from 'react';
import { getCandidates, saveCandidate } from '../../api/candidate';
import { useNavigate, useParams } from 'react-router';
import InputField from '../InputField/InputField'
import { getAllSkills } from '../../api/common';
import MultiSelectDropdown from '../MultiSelectDropdown/MultiSelectDropdown';
import { CANDIDATE_CURRENT_STATUS } from '../../config';

const CandidateForm = () => {
  const { candidateId } = useParams();
  console.log(candidateId);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    highestEducation: '',
    nodeExperience: '',
    reactExperience: '',
    currentStatus: '',
    comment: '',
    expectedSalary: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const emailValid = validateEmail(formData.email);

    if (!emailValid) {
      setError('Invalid email address');
      return;
    }

    setError(''); // Clear previous errors

    try {
      const skillIds = selectedSkills.map(item => item.value).toString();
     
      const resp = await saveCandidate({...formData, skillIds}, candidateId)
      navigate("/")
    } catch (error) {
      setError(error.message)
    }finally {
      setLoading(false)
    }
  };

  useEffect(() =>{
    const fetchSkills = async () => {
      try {
        const resp = await getAllSkills();
        const formatedSkills = resp.skills.map(sk => ({ value: sk.id, label: sk.name}))
        setSkills(formatedSkills);
      } catch (error) {
        setError(error.message)
      }
    }
    fetchSkills();

  },[])
  useEffect(() =>{
    const fetchCandidateData = async () => {
      try {
        const resp = await getCandidates(candidateId);
        const { details: { name, email, phone, expectedSalary, highestEducation, nodeExperience, reactExperience, currentStatus, comment } } = resp;
        setFormData({
          name, 
          email,
          phone,
          expectedSalary,
          highestEducation,
          nodeExperience,
          reactExperience,
          currentStatus,
          comment
        })
        const formatedSkills = resp.details.candidateSkills.map(sk => ({ value: sk.skillId, label: sk.name}))
        setSelectedSkills(formatedSkills);
      } catch (error) {
        setError(error.message)
      }
    }
    if(candidateId)
    fetchCandidateData();

    console.log(candidateId);
  },[candidateId])

  const onChange = (selectedItems) => {
    setSelectedSkills(selectedItems)
  }

  return (
   
      <form onSubmit={handleSubmit}>
        <InputField label="Name" type="text" name="name"
          value={formData.name} onChange={handleChange} required
        />
        <InputField label="Email" type="email" id="email" name="email"
          value={formData.email} onChange={handleChange} required
        />
        <InputField label="Phone" type="text" name="phone"
          value={formData.phone} onChange={handleChange} required
        />
        <InputField label="Expected Salary(INR)" type="number" name="expectedSalary"
          value={formData.expectedSalary} onChange={handleChange} required
        />
        <InputField label="Highest Education" type="text" name="highestEducation"
          value={formData.highestEducation} onChange={handleChange} required
        />
        <MultiSelectDropdown options={skills} onChange={onChange} selectedOptions={selectedSkills} />
        <InputField label="Node.js Experience" type="text" name="nodeExperience"
          value={formData.nodeExperience} onChange={handleChange} required
        />
        <InputField label="React.js Experience" type="text" name="reactExperience"
          value={formData.reactExperience} onChange={handleChange} required
        />

       
        <div className="mb-4">
          <label htmlFor="currentStatus" className="block text-sm font-semibold text-gray-600 mb-1">
            Current Status
          </label>
          <select
            id="currentStatus"
            name="currentStatus"
            value={formData.currentStatus}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Status</option>
            {
              CANDIDATE_CURRENT_STATUS.map(item => <option className='capitalize' value={item}>{item}</option>)
            }
            
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-semibold text-gray-600 mb-1">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="4"
          ></textarea>
        </div>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        <div className="mt-4">
          <button
          disabled={loading}
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {loading ? 'Please wait...' : candidateId ? `Update Candidate` : `Add Candidate`}
          </button>
        </div>
      </form>

  );
};

export default CandidateForm;
