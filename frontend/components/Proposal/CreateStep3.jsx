import Image from 'next/image';
import VotingInput from './VotingInput';

const CreateStep3 = ({ formData, setFormData }) => {
  const addOptionHandler = (id, votingOption) => {
    let updatedOptions = formData.votingOptions;

    updatedOptions[id] = {
      votingOption,
    };
    setFormData({
      ...formData,
      votingOptions: updatedOptions,
    });
  };

  const newOptionHandler = () => {
    setFormData((prevState) => ({
      ...prevState,
      votingOptions: [
        ...prevState.votingOptions,
        { id: Date.now(), votingOption: null },
      ],
    }));
  };

  const removeOptionHandler = (optionId) => {
    setFormData((prevState) => ({
      ...prevState,
      votingOptions: prevState.votingOptions.filter(
        (option) => option.id !== optionId
      ),
    }));
  };
  return (
    <div className='min-h-[70vh]'>
      <div className='flex flex-col mt-2 gap-4'>
        <div>
          <label className=' text-gray-400'>Voting Options *</label>
          <p className='text-xs  text-gray-600 '>
            Enter voting options for proposal.
          </p>
        </div>

        <div className='flex flex-col gap-3'>
          {formData.votingOptions.map((option, index) => (
            <VotingInput
              index={index}
              key={option.id}
              id={option.id}
              votingOption={option.votingOption}
              addOption={addOptionHandler}
              removeOption={removeOptionHandler}
            />
          ))}
        </div>

        <button
          type='button'
          onClick={newOptionHandler}
          className='bg-[#292929] hover:bg-[#333333] text-sm py-4 px-6 rounded-md outline-none'>
          Add Option
        </button>

        <div className='flex flex-col mt-6'>
          <label className='text-sm  mb-1 text-gray-400'>Deadline *</label>
          <input
            placeholder='20%'
            className='bg-[#181818] py-3 px-2 border border-gray-900 rounded-md placeholder:text-gray-500 text-gray-300  outline-none mb-2'
            onChange={(e) => {
              setFormData({
                ...formData,
                date: e.target.value,
              });
            }}
            value={formData?.date}
            type='datetime-local'
            required
          />
          <p className='text-xs  text-gray-600 '>
            Enter minimum percentage of votes (Yes/No) needed .
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateStep3;
