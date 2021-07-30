/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  someSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'about-legal-tech-class',
      ],
    },
    {
      type: 'category',
      label: 'Legal Technology Overview',
      items: ['legal-tech-overview/legal-tech-overview',
              'legal-tech-overview/substantive-vs-non-substantive',
              'legal-tech-overview/examples',
              'legal-tech-overview/maturity-model'],
    },
    {
      type: 'category',
      label: 'The Access to Justice Problem',
      items: ['a2j/a2j'],
    },
    {
      type: 'category',
      label: 'The Changing Legal Profession',
      items: ['changing-legal-profession/changing-legal-profession']
    },    
    {
      type: 'category',
      label: 'Building Things',
      items: [
          {
            type: 'category',
            label: 'Avoiding Failure',
            items: ['avoiding-failure/avoiding-failure']
          },
          {
            type: 'category',
            label: 'Forming a Team',
            items: ['forming-team/forming-team']
          },
          {
            type: 'category',
            label: 'Assessing User Needs',
            items: ['user-needs/user-needs']
          },
          {
            type: 'category',
            label: 'Choosing the Right Project',
            items: ['choosing-project/choosing-project']
          },    
          {
            type: 'category',
            label: 'User Centered Design',
            items: ['user-centered-design/user-centered-design']
          },
          {
            type: 'category',
            label: 'Preparing Your Project',
            items: ['project-planning/project-planning']
          },
          {
            type: 'category',
            label: 'Speaking the Right Language',
            items: ['speaking-right-language/speaking-right-language']
          },
          {
            type: 'category',
            label: 'The Prototyping Phase',
            items: ['prototyping/prototyping']
          },      
          {
            type: 'category',
            label: 'Verifying Your Work',
            items: ['verification/verification']
          },      
          {
            type: 'category',
            label: 'Getting Useful Feedback',
            items: ['feedback/feedback']
          },      
          {
            type: 'category',
            label: 'Testing',
            items: ['testing/testing',
                    'testing/testing-scenarios',
                    'testing/lorem-ipsum']
          },      
          {
            type: 'category',
            label: 'Driving User Acceptance',
            items: ['gaining-audience/gaining-audience']
          },                                                
          {
            type: 'category',
            label: 'Maintenance',
            items: ['maintenance/maintenance']
          },           
    
        ]
    },
    {
      type: 'category',
      label: 'Representing Rules in Code',
      items: ['representing-rules/representing-rules']
    },  
    {
      type: 'category',
      label: 'A Practical Guide to Docassemble Development',
      items: [
        'introduction-to-docassemble',
        'practical-guide-docassemble/practical-guide-docassemble',
        'practical-guide-docassemble/controlling-interview-order',
         'practical-guide-docassemble/object-oriented-programming',
         'repeated-information',
         {
          type: 'category',
          label: 'References',
          items: ['yaml',
            'markdown',
            'mako',
            'python',
            'jinja2',
            'practical-guide-docassemble/installing-production-app',
            'practical-guide-docassemble/setup-server'],
        },    
        ]
    },      
    {
      type: 'category',
      label: 'Ethical Issues',
      items: ['ethical-issues/ethical-issues']
    },              
    {
      type: 'category',
      label: 'Tutorials',
      items: ['tutorials']
    },
    {
      type: 'category',
      label: 'Classes',
      items: [
        'classes/class-overview',
        'classes/other-classes',
        'classes/resources',
        {
          type: 'category',
          label: 'Legal Tech for Small Firms',
          items: [
            {
              type: 'category',
              label: 'Fall 2020 (archived)',
              items: [
                'classes/small-firms/2020/2020-legal-tech-small-firms',
                'classes/small-firms/2020/2020-legal-tech-small-firms-syllabus',
                'classes/small-firms/2020/2020-legal-tech-small-firms-assignments',
                'classes/small-firms/2020/2020-legal-tech-small-firms-rubric'    
              ]
            },
            'classes/small-firms/2021-legal-tech-small-firms',
            'classes/small-firms/2021-legal-tech-small-firms-syllabus',
            'classes/small-firms/2021-legal-tech-small-firms-assignments',
            'classes/small-firms/2021-legal-tech-small-firms-rubric'
          ]
        },
        {
          type: 'category',
          label: 'Spring 2021 - Lawyering in the Age of Smart Machines',
          items: [
            'classes/2021-smart-machines/2021-smart-machines',
            'classes/2021-smart-machines/2021-smart-machines-syllabus',
            'classes/2021-smart-machines/2021-smart-machines-assignments',
            'classes/2021-smart-machines/2021-smart-machines-rubric'      
          ]
        },
        {
          type: 'category',
          label: '(Archived) Spring 2020 - Lawyering in the Age of Smart Machines',
          items: ['classes/2020-law-smart-machines',
            'classes/law-smart-machines-final-project',
            'classes/project-ideas',
            'classes/2020-law-smart-machines-assignment-1',
            'classes/2020-law-smart-machines-assignment-2',
            'classes/assignment-branch-logic',
            'classes/assignment-creating-document']
        },
        {
          type: 'category',
          label: 'Assembly Line Project Teaching Tuesdays',
          items: [
            'classes/assembly-line/2020-assembly-line-assignment-1',
            'classes/assembly-line/2020-assembly-line-assignment-3'
          ]
        },
        {
          type: 'category',
          label: 'Docacon 2020',
          items: [
            'classes/docacon-2020/hello-world',
            'classes/docacon-2020/logic',
            'classes/docacon-2020/question-types',
            'classes/docacon-2020/customizing-appearance',
            'classes/docacon-2020/working-with-docx',
          ]
        },        
      ]
    },
    {
      type: 'category',
      label: 'Appendices',
      items: ['appendices/editing-docusaurus'],
    },

  ]
}