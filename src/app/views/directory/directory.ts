import { Component } from '@angular/core'
import { PageTitle } from '@app/components/page-title/page-title'
import { NgIcon } from '@ng-icons/core'
import { ContactCard } from '@/app/views/directory/components/contact-card'
import { ContactType } from '@/app/views/directory/types'

@Component({
  selector: 'app-directory',
  imports: [PageTitle, NgIcon, ContactCard],
  templateUrl: './directory.html',
  styles: ``,
})
export class Directory {
  contacts: ContactType[] = [
    {
      name: 'Daniel Carter',
      avatar: 'assets/images/users/user-1.jpg',
      country: { name: 'USA', flag: 'assets/images/flags/us.svg' },
      jobTitle: 'Product Manager',
      about:
        'Daniel is a tech-savvy product manager with a track record of launching scalable SaaS products.',
      verified: true,
      rating: 4.8,
      campaigns: 76,
      contacts: 335,
      engagement: '97%',
    },
    {
      name: 'Liam Carter',
      avatar: 'assets/images/users/user-2.jpg',
      country: { name: 'USA', flag: 'assets/images/flags/us.svg' },
      jobTitle: 'Creative Director',
      about:
        'Liam leads design teams and defines creative visions across multi-channel campaigns.',
      verified: true,
      rating: 4.7,
      campaigns: 132,
      contacts: 580,
      engagement: '91%',
    },
    {
      name: 'Emma Scott',
      avatar: 'assets/images/users/user-3.jpg',
      country: { name: 'UK', flag: 'assets/images/flags/gb.svg' },
      jobTitle: 'UI/UX Designer',
      about:
        'Emma specializes in creating intuitive, user-centered web and mobile interfaces.',
      rating: 4.6,
      campaigns: 115,
      contacts: 430,
      engagement: '87%',
    },
    {
      name: 'Noah Blake',
      avatar: 'assets/images/users/user-4.jpg',
      country: { name: 'Australia', flag: 'assets/images/flags/au.svg' },
      jobTitle: 'Frontend Developer',
      about:
        'Noah builds scalable and responsive interfaces with modern JavaScript frameworks.',
      rating: 4.8,
      campaigns: 121,
      contacts: 400,
      engagement: '93%',
    },
    {
      name: 'Olivia White',
      avatar: 'assets/images/users/user-5.jpg',
      country: { name: 'France', flag: 'assets/images/flags/fr.svg' },
      jobTitle: 'Marketing Manager',
      about:
        'Olivia drives customer acquisition through strategic performance campaigns.',
      rating: 4.5,
      campaigns: 140,
      contacts: 560,
      engagement: '88%',
    },
    {
      name: 'Ethan Moore',
      avatar: 'assets/images/users/user-6.jpg',
      country: { name: 'Germany', flag: 'assets/images/flags/de.svg' },
      jobTitle: 'Brand Consultant',
      about:
        'Ethan helps startups position their brand with high-impact storytelling.',
      rating: 4.6,
      campaigns: 98,
      contacts: 380,
      engagement: '79%',
    },
    {
      name: 'Ava Mitchell',
      avatar: 'assets/images/users/user-7.jpg',
      country: { name: 'Canada', flag: 'assets/images/flags/ca.svg' },
      jobTitle: 'SEO Specialist',
      about:
        'Ava improves online visibility through white-hat SEO strategies and audits.',
      verified: true,
      rating: 4.9,
      campaigns: 150,
      contacts: 620,
      engagement: '95%',
    },
    {
      name: 'Lucas Bennett',
      avatar: 'assets/images/users/user-8.jpg',
      country: { name: 'India', flag: 'assets/images/flags/in.svg' },
      jobTitle: 'Growth Hacker',
      about:
        'Lucas focuses on scalable growth through product-led and data-driven experiments.',
      rating: 4.4,
      campaigns: 103,
      contacts: 470,
      engagement: '86%',
    },
    {
      name: 'Sophia Taylor',
      avatar: 'assets/images/users/user-9.jpg',
      country: { name: 'Spain', flag: 'assets/images/flags/es.svg' },
      jobTitle: 'Digital Analyst',
      about:
        'Sophia provides actionable insights through advanced data visualization.',
      verified: true,
      rating: 4.3,
      campaigns: 111,
      contacts: 355,
      engagement: '82%',
    },
    {
      name: 'Mason Rivera',
      avatar: 'assets/images/users/user-10.jpg',
      country: { name: 'Italy', flag: 'assets/images/flags/it.svg' },
      jobTitle: 'Content Strategist',
      about:
        'Mason crafts content plans that align with business goals and brand tone.',
      verified: true,
      rating: 4.5,
      campaigns: 124,
      contacts: 512,
      engagement: '89%',
    },
    {
      name: 'Isabella Reed',
      avatar: 'assets/images/users/user-1.jpg',
      country: { name: 'Brazil', flag: 'assets/images/flags/br.svg' },
      jobTitle: 'Social Media Manager',
      about:
        'Isabella leads engagement and audience growth across social platforms.',
      verified: true,
      rating: 4.7,
      campaigns: 108,
      contacts: 498,
      engagement: '84%',
    },
    {
      name: 'James Lee',
      avatar: 'assets/images/users/user-2.jpg',
      country: { name: 'South Korea', flag: 'assets/images/flags/kr.svg' },
      jobTitle: 'Data Engineer',
      about:
        'James builds and optimizes data pipelines for analytics and ML workflows.',
      verified: true,
      rating: 4.6,
      campaigns: 138,
      contacts: 560,
      engagement: '91%',
    },
    {
      name: 'Mia Johnson',
      avatar: 'assets/images/users/user-3.jpg',
      country: { name: 'Japan', flag: 'assets/images/flags/jp.svg' },
      jobTitle: 'Project Manager',
      about:
        'Mia ensures timely project delivery and team collaboration across sprints.',
      verified: true,
      rating: 4.5,
      campaigns: 120,
      contacts: 405,
      engagement: '85%',
    },
    {
      name: 'Benjamin Adams',
      avatar: 'assets/images/users/user-4.jpg',
      country: { name: 'South Africa', flag: 'assets/images/flags/za.svg' },
      jobTitle: 'Product Designer',
      about:
        'Benjamin designs products that are both functional and delightful to use.',
      verified: true,
      rating: 4.4,
      campaigns: 106,
      contacts: 376,
      engagement: '80%',
    },
    {
      name: 'Charlotte Evans',
      avatar: 'assets/images/users/user-8.jpg',
      country: { name: 'Netherlands', flag: 'assets/images/flags/nl.svg' },
      jobTitle: 'Creative Strategist',
      about:
        'Charlotte combines data with creativity to craft powerful brand messages.',
      rating: 4.8,
      campaigns: 129,
      contacts: 590,
      engagement: '94%',
    },
    {
      name: 'Daniel Foster',
      avatar: 'assets/images/users/user-7.jpg',
      country: { name: 'Sweden', flag: 'assets/images/flags/se.svg' },
      jobTitle: 'Innovation Lead',
      about:
        'Daniel drives innovation initiatives and fosters cross-functional collaboration.',
      verified: true,
      rating: 4.6,
      campaigns: 117,
      contacts: 488,
      engagement: '90%',
    },
  ]
}
