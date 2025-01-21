import React from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';

interface SearchAndFilterProps {
  searchTerm: string;
  selectedType: string;
  sortBy: string;
  types: string[];
  sortOptions: { value: string; label: string; }[];
  onSearchChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onSortChange: (value: string) => void;
}

export const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  searchTerm,
  selectedType,
  sortBy,
  types,
  sortOptions,
  onSearchChange,
  onTypeChange,
  onSortChange,
}) => (
  <div className="flex flex-col md:flex-row gap-4 mb-8">
    <div className="relative flex-1">
      <Search className="absolute left-3 top-3 text-gray-400" size={20} />
      <input
        type="text"
        placeholder="Search for your dream car..."
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Filter size={20} className="text-gray-600" />
        <select
          className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
        >
          {types.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-2">
        <ChevronDown size={20} className="text-gray-600" />
        <select
          className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
        >
          {sortOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>
);