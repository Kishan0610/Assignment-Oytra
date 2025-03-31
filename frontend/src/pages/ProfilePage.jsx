import ProfileForm from '../components/Profile/ProfileForm';
import AddressList from '../components/Profile/AddressList';

const ProfilePage = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Your Profile</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    <ProfileForm />
                </div>
                <div>
                    <AddressList />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;