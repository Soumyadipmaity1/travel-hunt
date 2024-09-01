
const GridLayout = () => {
  return (
    <div className="p-4 md:p-8 flex justify-center items-center mt-20">
      <div className="grid gap-4 grid-rows-2 grid-cols-4 bg-grid px-8 border-2 border-white rounded-[33px] py-4">
        
        {/* Accommodations  */}
        <div className="col-span-2 row-span-1 bg-black/30 rounded-2xl text-white flex items-center justify-center p-4" style={{width: '435px', height: '200px'}}>
          Accommodations
        </div>
        
        {/* Local Guides  */}
        <div className="col-span-1 row-span-2 bg-black/30 rounded-2xl text-white flex items-center justify-center p-4" style={{width: '210px', height: '420px'}}>
          Local Guides
        </div>

        {/* Community  */}
        <div className="col-span-1 row-span-3 bg-black/30 rounded-2xl text-white flex items-center justify-center p-4" style={{width: '200px', height: '535px'}}>
          Community
        </div>

        {/* Explore ) */}
        <div className="col-span-1 row-span-1 bg-black/30 rounded-2xl text-white flex items-center justify-center p-4" style={{width: '210px', height: '200px'}}>
          Explore
        </div>

        {/* Local Experiences  */}
        <div className="col-span-1 row-span-1 bg-black/30 rounded-2xl text-white flex items-center justify-center p-4" style={{width: '210px', height: '200px'}}>
          Local Experiences
        </div>

        {/* Deals */}
        <div className="col-span-3 row-span-1 bg-black/30 rounded-2xl text-white flex items-center justify-center p-4" style={{width: '662px', height: '102px'}}>
          Deals
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
