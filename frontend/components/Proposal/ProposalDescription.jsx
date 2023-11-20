import React, { useState } from 'react';

const ProposalDescription = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [showCode, setShowCode] = useState(false);

  return (
    <div className='flex-[0.7] bg-[#181818]  rounded-md overflow-hidden'>
      <div className='flex  bg-[#232323]'>
        <p
          onClick={() => {
            setShowCode(false);
            setShowDescription(true);
          }}
          className={`${
            showDescription ? 'bg-[#323232]' : 'bg-inherit text-gray-400'
          } py-4 px-8 hover:bg-[#272727] cursor-pointer`}>
          Description
        </p>
        <p
          onClick={() => {
            setShowCode(true);
            setShowDescription(false);
          }}
          className={`${
            showCode ? 'bg-[#323232]' : 'bg-inherit text-gray-400'
          } py-4 px-8 hover:bg-[#272727] cursor-pointer`}>
          Executable Code
        </p>
      </div>

      {showDescription && (
        <div className='px-5 py-4 text-[#848484] text-justify'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          justo ligula, maximus eu cursus molestie, laoreet in felis. Donec
          pharetra nisl eros, congue commodo tellus auctor et. Donec accumsan
          justo lectus, sit amet suscipit eros mollis sed. Donec sed pulvinar
          felis, malesuada molestie urna. Aliquam tincidunt lorem eget maximus
          aliquam. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. In bibendum, metus vitae rhoncus
          commodo, lectus felis sodales justo, vel congue urna velit eu erat.
          Integer aliquam, ante nec feugiat tempus, odio lacus egestas lorem,
          sit amet porttitor neque nibh sit amet nibh. Ut placerat nunc a
          sollicitudin porttitor. Pellentesque dapibus ante velit, vel molestie
          ligula pellentesque quis. Maecenas orci risus, congue nec lobortis
          nec, suscipit nec lacus. Pellentesque posuere libero sapien, mattis
          bibendum elit maximus ut. Quisque fringilla dolor et purus egestas, at
          pharetra augue tempor. Donec commodo lacinia augue condimentum porta.
          Vestibulum in suscipit augue. Morbi non consectetur lorem. Praesent
          bibendum, quam quis porttitor auctor, eros tellus elementum dui, vel
          pretium neque enim eget orci. Donec mollis ullamcorper purus ac
          convallis. Curabitur malesuada fermentum ex, quis pretium dui faucibus
          sed. Aenean posuere pellentesque facilisis. Proin fermentum tincidunt
          mauris, a sagittis ipsum consectetur vel. Fusce bibendum quam eros, a
          laoreet sapien tincidunt cursus. Curabitur in diam ut odio pulvinar
          condimentum sit amet quis felis. Donec venenatis ornare nisi, id
          commodo arcu luctus nec. Cras vulputate turpis nunc, sed sodales
          libero sollicitudin quis. Donec sem ipsum, tristique eget semper eu,
          suscipit quis felis. Morbi a ex nisi. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Vivamus faucibus
          malesuada viverra. Etiam massa neque, luctus eget varius ac,
          ullamcorper et purus. Cras ut mauris viverra, faucibus eros ac,
          gravida ipsum. Duis a lectus varius, ultricies velit vitae, molestie
          massa. Duis euismod tellus in convallis efficitur. Aliquam tempus nibh
          ultricies condimentum pretium. Mauris sed tellus hendrerit, euismod
          elit ac, accumsan massa. Aenean nec interdum dui, in tempor tortor.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Aliquam tincidunt ex sit amet nibh condimentum
          bibendum. Nullam faucibus, eros vitae tincidunt ultricies, nisl diam
          consectetur sem, quis tempus dolor risus quis tellus. Donec faucibus
          elit augue, id ornare tortor tempor nec. Integer et convallis magna.
          Nullam dictum condimentum risus, ut pellentesque ante maximus a.
          Vestibulum rutrum suscipit luctus. Pellentesque et arcu at ipsum
          mollis mattis. Fusce vel diam ex. Morbi gravida lorem in malesuada
          semper. Nam euismod ultricies laoreet. Donec tortor enim, cursus id mi
          tempus, viverra mattis purus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut nibh neque, dignissim et ultrices ac, commodo
          tristique leo. Nam sit amet nibh urna. Aliquam odio ante, pretium vel
          volutpat sit amet, aliquet nec velit. Nam ante massa, cursus nec
          posuere in, ultrices eu sapien. Proin sit amet augue iaculis, tempor
          diam a, mattis justo. Nulla ut mollis velit. Sed ultricies enim a
          tortor pharetra vehicula. Pellentesque ullamcorper arcu in neque
          dapibus sollicitudin. Maecenas et condimentum magna, vel congue enim.
          Maecenas id egestas lorem, sed tincidunt orci. Morbi non nibh nisi.
          Mauris hendrerit rutrum condimentum.
        </div>
      )}

      {showCode && (
        <div className='px-6 pb-10'>
          <div className='border-[0.5px] border-[#333333]  rounded-md mt-6'>
            <div className='flex flex-col gap-3 py-3 px-4'>
              <div className='w-full'>
                <p className='text-gray-400'>Calldata:</p>
                <p className='text-[#454545] break-words'>
                  0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000dabad81af85554e9ae636395611c58f7ec1aaec5000000000000000000000000000000000000000000000000000000000000000f
                </p>
              </div>
              <div>
                <p className='text-gray-400'>Target:</p>
                <p className='text-[#454545] break-words'>0x930....0304903</p>
              </div>
              <div>
                <p className='text-gray-400'>Value:</p>
                <p className='text-[#454545] break-words'>0</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProposalDescription;
