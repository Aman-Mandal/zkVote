import Image from 'next/image';
import VotingInput from './VotingInput';

const CreateStep2 = ({ formData, setFormData }) => {
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
      votingOptions: [...prevState.votingOptions, { votingOption: null }],
    }));
  };

  const removeOptionHandler = (id) => {
    setFormData((prevState) => ({
      ...prevState,
      votingOptions: prevState.votingOptions.filter((_, index) => index !== id),
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
              key={index}
              id={index}
              votingOption={option.votingOption}
              addOption={addOptionHandler}
              removeOption={removeOptionHandler}
            />
          ))}
        </div>

        <button
          type='button'
          onClick={newOptionHandler}
          className='bg-[#292929] hover:bg-[#333333] text-sm py-4 px-6 rounded-md'>
          Add Option
        </button>
      </div>
    </div>
  );
};

export default CreateStep2;
