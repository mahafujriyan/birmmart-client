import React from 'react';

const CompanyList = ({categoryData}) => {
    return (
            <div>
      <h3 className="text-2xl font-semibold mb-4 capitalize text-center">
        {categoryData.category} Partners
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categoryData.companies.map((company) => (
          <div key={company.name} className=" shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src={company.logo} alt={company.name} className="w-20 h-20 object-contain mb-3" />
            <h4 className="text-lg font-semibold text-center">{company.name}</h4>
            <button
              onClick={() => window.open(company.website, '_blank')}
              className="mt-3 px-4 py-2 bg-primary text-white rounded hover:bg-blue-700"
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
    );
};

export default CompanyList;