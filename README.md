# Django-React File Management System

A full-stack file management application with user authentication and file upload/download capabilities.

![Screenshot 2025-03-31 142039](https://github.com/user-attachments/assets/6f130d23-14f3-464b-951e-340b4295801d)

## Features

- ✅ User authentication (Register/Login/Logout)
- ✅ File management (Upload/Download)
- ✅ Dashboard with file statistics
- ✅ User profile management
- ✅ Responsive design with Tailwind CSS

## Technologies

- **Backend**: Django, Django REST Framework
- **Frontend**: React, React Router
- **Database**: SQLite (Development)
- **Styling**: Tailwind CSS

## Setup Instructions

### Prerequisites

- Python 3.9+
- Node.js 16+
- pipenv or pip

### Backend Setup

1. **Clone repository**:
```bash
git clone https://github.com/Kishan0610/django-react-filemanager.git
cd django-react-filemanager/backend
```

2. **Install dependencies**:
```bash
pip install -r requirements.txt
```

3. **Set up environment variables**:
Create `.env` file in `backend/`:
```env
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
```

4. **Run migrations**:
```bash
python manage.py makemigrations
python manage.py migrate
```

5. **Create superuser** (optional for admin access):
```bash
python manage.py createsuperuser
```

6. **Run development server**:
```bash
python manage.py runserver
```

### Frontend Setup

1. **Navigate to frontend**:
```bash
cd ../frontend
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run development server**:
```bash
npm start
```

### Running the Application

1. Start Django backend:
```bash
cd backend && python manage.py runserver
```

2. Start React frontend (in another terminal):
```bash
cd frontend && npm start
```

3. Access the application at:
```
http://localhost:3000
```

## Project Structure

```
django-react-filemanager/
├── backend/               # Django project
│   ├── filemanager/       # File management app (upload/download)
│   ├── users/             # Custom user app
│   ├── manage.py
│   └── requirements.txt
├── frontend/              # React app
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Application pages
│   │   └── services/      # API services
│   ├── package.json
│   └── README.md
└── README.md              # This file
```

## Contact

Ravikishan Gupta - 061002kishan@gmail.com  
Project Link: [https://github.com/Kishan0610/django-react-filemanager](https://github.com/Kishan0610/django-react-filemanager)


## Screenshots
![Screenshot 2025-03-31 142003](https://github.com/user-attachments/assets/ec5cf5de-f2de-4fac-bd79-dd81426d35fb)
![Screenshot 2025-03-31 142028](https://github.com/user-attachments/assets/95f9217d-a0c7-4984-a503-4173785c0087)
![Screenshot 2025-03-31 142039](https://github.com/user-attachments/assets/08bc420e-dec0-4139-a9e4-d12fb8acbca6)
![Screenshot 2025-03-31 142333](https://github.com/user-attachments/assets/f22be42c-c820-4759-88c9-f5e2977da24e)
![Screenshot 2025-03-31 142346](https://github.com/user-attachments/assets/d34b2b12-6c6a-4185-963c-fb2b3c247694)
![Screenshot 2025-03-31 142404](https://github.com/user-attachments/assets/618fd93f-dce0-4280-8e37-0a37627837ab)

 **Admin**:
![Screenshot 2025-03-31 142520](https://github.com/user-attachments/assets/21a81d62-8e3b-494f-b578-b821981eb9fd)



