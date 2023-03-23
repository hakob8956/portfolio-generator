# portfolio-generator

JS framework to dynamically generate a portfolio site from a JSON resume

## Table of Contents

- [portfolio-generator](#portfolio-generator)
  - [Table of Contents](#table-of-contents)
- [Features:](#features)
- [Sections](#sections)
  - [Display order:](#display-order)
  - [Personal:](#personal)
  - [Projects:](#projects)
  - [Work/Volunteer](#workvolunteer)
  - [Education/Awards](#educationawards)
  - [Contributions](#contributions)
    - [Host your portfolio free using github pages :](#host-your-portfolio-free-using-github-pages-)

# Features:

- Framework generates a responsive website by reading information from resume.json
- Adapts to different screen sizes from phones to desktops
- Ability to choose the order of different sections
- Ability to create multiple project sections
- Ability to create sideshows for projects
- All sections are optional; any section can be skipped/hidden
- Supports personal bio, social media link, projects, work, education, volunteer work, awards sections

# Sections

### Display order:

The `displayOrder` array controls the order of sections on the website. Any section not listed in the arrays will not be displayed.
Example:

```json
"displayOrder": ["shortBio","projects", "work", "education", "awards", "volunteer", "social"]
```

Note: `social` is the `profiles` in the `personal` section.

### Personal:

All the elements in personal section are optional. All the social media profiles can be listed in the `profiles` array. Icons are from [zocial](https://github.com/smcllns/css-social-buttons).

Example:

```json
"personal": {
    "name": "John Doe",
    "title": "Software Developer",
    "email": "johndoe@email.com",
    "phone": "123-456-7890",
    "websites": [
      {
        "network": "linkedin",
        "label": "johndoe",
        "url": "https://www.linkedin.com/in/johndoe"
      },
      {
        "network": "github",
        "label": "johndoe",
        "url": "https://github.com/johndoe"
      }
    ],
    "shortBio": "Hello! I am John Doe. I make stuff. Here's some of it.",
    "location": "Delaware",
    "profiles": [
      {
        "network": "Twitter",
        "url": "http://twitter.com/johndoe"
      },
      {
        "network": "github",
        "url": "http://github.com/johndoe"
      },
      {
        "network": "linkedin",
        "url": "https://www.linkedin.com/in/johndoe"
      }
    ]
  }
```

### Projects:

This is my favourite. You can create different sections of projects and multiple projects in each section. Eg: Frontend/Backend/Mobile etc.

`projectSections` is an array of project section objects. Each section has a `title` and a list of `projects`.

Example:

```json
"projectSections": [
       {
      "title": "FrontEnd",
      "projects" :[ ... ]
    },
    {
      "title": "BackEnd",
      "projects" :[ ... ]
     }
   ]
```

There are different kind of projects depending on what information you provide for each project.

- If you provide an array in `description`, it will rendered as bullet points.
- If you provide a string `description`, it will be rendered as a center aligned paragraph.
- If you provide `gallery` array with a bunch of image links, it will render a slideshow of images.

Example:

```json
  [{
        "title": "Project with bulleted description",
        "link": "https://example.com",
        "thumbnail": "https://example.com/screenshots.PNG",
        "description": [
          "Bullet 1",
          "Bullet 2"
          ...
          ]
        },
        {
          "title": "Project with image gallery",
          "thumbnail": "https://example.com/screenshots.PNG",
          "link": "https://example.com",
          "description": "To create an image gallery in pop up, put the image URLs comma separated in gallery: []",
          "gallery": [
            "https://example.com/screenshots1.PNG",
            "https://example.com/screenshots2.PNG",
            ...
           ]
        }

```

### Work/Volunteer

- If you provide a `website` the organization name will be a link.
- If you provide an array of `highlights` it will create a collapsible bullet list

### Education/Awards

See demo portfolio for examples.

### Contributions

Please feel free to report any bugs or send in pull request with code changes.

I love it when my work helps someone. So if you're using this project or it inspired you to build something of your own, I'd love to know! My social media is listed on my portfolio :)

#### Host your portfolio free using github pages :

I host my portfolio using github pages. To use the framework to make your site, you just need to change resume.json and update the `RESUME_LOCATION` in `constants.js` and you're good to go.

- Base code forked from https://github.com/navdeepsekhon/portfolio-generator
