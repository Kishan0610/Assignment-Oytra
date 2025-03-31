# Django-React File Management System

A full-stack file management application with user authentication and file upload/download capabilities.
![Screenshot 2025-03-31 142039](https://github.com/user-attachments/assets/7aec3196-016d-4d69-8606-66153e62aaeb)


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

![Screenshot 2025-03-31 142003](https://github.com/user-attachments/assets/e55654bb-4fa3-46d0-843f-c3ccb79e0a2e)
![Screenshot 2025-03-31 142028](https://github.com/user-attachments/assets/b6eddb7d-0764-49e7-bc9b-860fc6ed950f)
![Screenshot 2025-03-31 142039](https://github.com/user-attachments/assets/ef4252a0-08a9-42ee-8264-034523d302f1)
![Screenshot 2025-03-31 142333](https://github.com/user-attachments/assets/1c855545-144e-4b48-ac77-76b2898b801a)
![Screenshot 2025-03-31 142346](https://github.com/user-attachments/assets/4ff78f14-88c6-42bc-a968-d19ba976aba1)
![Screenshot 2025-03-31 142404](https://github.com/user-attachments/assets/36c6661c-0407-41c9-b756-12c2dc7dd143)

## Admin
![Screenshot 2025-03-31 142520](https://github.com/user-attachments/assets/0fca0fe6-f4e0-41fc-88bd-17db084a4142)




