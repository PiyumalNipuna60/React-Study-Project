import React, { Component } from 'react'
import Card from '../Card/Card'
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AssistantIcon from '@mui/icons-material/Assistant';

export default class CardContainer extends Component {
  render() {
    return (
        <div className="flex justify-center gap-6 p-4">
        <Card
          icon={<AccessibilityIcon/>}
          title="Card 1"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          dolores minus. Dolorem fugit pariatur dolorum. Maiores alias odit
          dolore mollitia, ea dolor quibusdam eius natus odio totam sunt
          commodi animi."
        />
        <Card
        icon={<AccountBalanceIcon />}
          title="Card 2"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          dolores minus. Dolorem fugit pariatur dolorum. Maiores alias odit
          dolore mollitia, ea dolor quibusdam eius natus odio totam sunt
          commodi animi."
        />
        <Card
        icon={<AnalyticsIcon />}
          title="Card 3"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          dolores minus. Dolorem fugit pariatur dolorum. Maiores alias odit
          dolore mollitia, ea dolor quibusdam eius natus odio totam sunt
          commodi animi."
        />
        <Card
        icon={<AssistantIcon />}
          title="Card 4"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          dolores minus. Dolorem fugit pariatur dolorum. Maiores alias odit
          dolore mollitia, ea dolor quibusdam eius natus odio totam sunt
          commodi animi."
        />
        </div>
    )
  }
}
