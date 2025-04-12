
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from '@/components/ui/table';
import { substances } from '@/data/substances';

const Citations = () => {
  const citations = [
    {
      substance: 'Coffee',
      source: 'National Coffee Association',
      url: 'https://www.ncausa.org/About-Coffee/Coffee-and-Health',
      description: 'Information about coffee health effects and consumption'
    },
    {
      substance: 'Alcohol',
      source: 'National Institute on Alcohol Abuse and Alcoholism',
      url: 'https://www.niaaa.nih.gov/alcohols-effects-health',
      description: "Research on alcohol's effects on the body and health"
    },
    {
      substance: 'Cannabis',
      source: 'National Institute on Drug Abuse',
      url: 'https://nida.nih.gov/research-topics/cannabis-marijuana',
      description: 'Scientific information on cannabis and its health impacts'
    },
    {
      substance: 'Tobacco',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/tobacco/data_statistics/fact_sheets/health_effects/effects_cig_smoking/index.htm',
      description: 'Research on health effects of smoking and tobacco use'
    },
    {
      substance: 'Sugar',
      source: 'Harvard T.H. Chan School of Public Health',
      url: 'https://www.hsph.harvard.edu/nutritionsource/carbohydrates/added-sugar-in-the-diet/',
      description: 'Research on sugar consumption and health impacts'
    },
    {
      substance: 'Opioids',
      source: 'U.S. Department of Health & Human Services',
      url: 'https://www.hhs.gov/opioids/about-the-epidemic/index.html',
      description: 'Information about opioid use and health effects'
    },
    {
      substance: 'Cocaine',
      source: 'National Institute on Drug Abuse',
      url: 'https://nida.nih.gov/research-topics/cocaine',
      description: 'Scientific information on cocaine and its health impacts'
    },
    {
      substance: 'Amphetamines',
      source: 'National Institute on Drug Abuse',
      url: 'https://nida.nih.gov/research-topics/commonly-used-drugs-charts#prescription-stimulants',
      description: 'Research on stimulants and their effects on health'
    },
    {
      substance: 'Tomato Soup',
      source: 'Healthline Article (With More Citations)',
      url: 'https://www.healthline.com/nutrition/tomato-soup-benefits#1-Highly-nutritious',
      description: 'Nutritional information about tomatoes and tomato products'
    }
  ];

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <div className="flex items-center mb-8">
        <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="mr-2" size={20} />
          <span>Back to Substances</span>
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">Citations and References</h1>
      
      <p className="text-gray-700 mb-8">
        The health information presented in this application is based on scientific research 
        and reliable sources. Below are citations for the information about each substance.
      </p>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Substance</TableHead>
            <TableHead>Source</TableHead>
            <TableHead className="hidden md:table-cell">Description</TableHead>
            <TableHead>Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {citations.map((citation, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{citation.substance}</TableCell>
              <TableCell>{citation.source}</TableCell>
              <TableCell className="hidden md:table-cell">{citation.description}</TableCell>
              <TableCell>
                <a 
                  href={citation.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Visit
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Disclaimer</h2>
        <p className="text-gray-700">
          This application is for educational purposes only. The information provided 
          should not be used for medical advice, diagnosis, or treatment. Always consult 
          with qualified healthcare professionals regarding health concerns.
        </p>
      </div>
    </div>
  );
};

export default Citations;
