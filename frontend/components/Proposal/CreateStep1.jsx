const CreateStep1 = ({ formData, setFormData }) => {
  return (
    <div className='min-h-[70vh]'>
      <div className='flex flex-col mt-8 '>
        <label className='text-sm  mb-1 text-gray-400'>Title *</label>
        <input
          className='bg-[#181818] py-2 px-2 border border-gray-900 rounded-md placeholder:text-gray-500 text-gray-300  outline-none mb-2'
          onChange={(e) => {
            setFormData({
              ...formData,
              title: e.target.value,
            });
          }}
          value={formData?.title}
          type='text'
        />
      </div>

      <div className='flex flex-col mt-3 mb-5'>
        <label className='text-sm  mb-1 text-gray-400'>Description *</label>
        <textarea
          rows={12}
          className='bg-[#181818] py-2 px-2 border border-gray-900 rounded-md placeholder:text-gray-500 text-gray-300  outline-none mb-2'
          onChange={(e) => {
            setFormData({
              ...formData,
              description: e.target.value,
            });
          }}
          value={formData?.description}
          type='text'
        />
        <p className='text-xs  text-gray-600 '>
          Keep the description of your proposal engaging, and descriptive.
        </p>
      </div>
    </div>
  );
};

export default CreateStep1;
