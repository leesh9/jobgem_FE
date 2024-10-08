import axios from "axios";

export default function JobPostingHeader({ posting, send ,isInterested, handleInterested}) {
	
	return (
		<div className='flex-grow w-4/5'>
			<div className='flex justify-between items-center mb-4'>
				<div className='items-center'>
					<div className='flex items-center'>
						<p className=''>{posting && posting.company.coName}</p>
						
							{isInterested ? (
								<button onClick={handleInterested} className='border border-red-500 ml-2 text-red-500 text-xs px-1 py-0.5 rounded flex items-center hover:bg-red-50 transition duration-300'>
									<svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 mr-1' viewBox='0 0 24 24' fill='red'>
										<path
											fillRule='evenodd'
											d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
											clipRule='evenodd'
										/>
								</svg>
								<p>관심기업</p>
								</button>
							) : (
								<button onClick={handleInterested} className='border border-gray-500 ml-2 text-gray-500 text-xs px-1 py-0.5 rounded flex items-center hover:bg-gray-50 transition duration-300'>
									<svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 mr-1' viewBox='0 0 24 24' fill='none' stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
										/>
									</svg>
									<p>관심기업</p>
								</button>
							)}

					</div>
					<h2 className='text-2xl font-semibold'>{posting && posting.poTitle}</h2>
				</div>
				<div className='flex items-center'>
					<button onClick={send} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
						지원하기
					</button>
				</div>
			</div>
			<hr className='my-4' />
			<div className='grid grid-cols-2 gap-4 '>
				<h3 className='text-xl font-semibold mb-2'>지원자격</h3>
				<h3 className='text-xl font-semibold mb-2'>근무조건</h3>
				<div className='grid grid-cols-2'>
					<p className='text-gray-600'>경력</p>
					<p className='font-medium'>{posting && posting.career && posting.career.map((career) => career.crName).join(", ")}</p>
				</div>
				<div className='grid grid-cols-2'>
					<p className='text-gray-600'>고용형태</p>
					<p className='font-medium'>{posting && posting.hireKind && posting.hireKind.map((hireKind) => hireKind.hkName).join(", ")}</p>
				</div>
				<div className='grid grid-cols-2'>
					<p className='text-gray-600'>스킬</p>
					<p className='font-medium'>{posting && posting.skill && posting.skill.map((skill) => skill.skName).join(", ")}</p>
				</div>
				<div className='grid grid-cols-2'>
					<p className='text-gray-600'>급여</p>
					<p className='font-medium'>{posting && posting.poSal ? posting.poSal : "면접후 결정"}</p>
				</div>
			</div>
		</div>
	);
}