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
      items: ['introduction'],
    },
    {
      type: 'category',
      label: 'References',
      items: ['yaml','markdown','mako','python'],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: ['tutorials']
    },
    {
      type: 'category',
      label: 'Choosing the Right Project',
      items: ['choosing-project/choosing-project']

    }
    {
      type: 'category',
      label: 'Classes',
      items: [
        {
          type: 'category',
          label: 'Lawyering in the Age of Smart Machines',
          items: ['classes/2020-law-smart-machines','classes/law-smart-machines-final-project','classes/project-ideas','classes/2020-law-smart-machines-assignment-1']
        },
      ]
    },
  ]
}

/*  {
    "Getting Started": ['introduction' ],
    Tutorials: ['tutorials'],
    References: ['yaml','markdown'],
    {
      type: 'category',
      'label': 'Classes', 
      items: ['classes/2020-law-smart-machines']
    }
  },
};
*/