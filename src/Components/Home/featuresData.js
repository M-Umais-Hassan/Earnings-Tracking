import Communication from '../../Assets/SVG/communication.svg';
import TaskManagment from '../../Assets/SVG/tasksmanagment.svg';
import EmployeeManagment from '../../Assets/SVG//employeemanagment.svg';
import OnlineWorkspace from '../../Assets/SVG/onlineworkspace.svg';
import OnlineSales from '../../Assets/SVG/onlinesales.svg';
import MultiPlatforms from '../../Assets/SVG/multipleplatforms.svg';

export const featuresData = [
    {
        id: 1,
        title: 'Online Communication',
        text: 'Write messages and send files in chats, make instant video calls, organize videoconferences (up to 24 participants).',
        svg: Communication
    },
    {
        id: 2,
        title: 'Tasks & project management',
        text: 'Create workgroups and assign tasks remotely. Monitor deadlines and get KPIs calculated automatically.',
        svg: TaskManagment
    },
    {
        id: 3,
        title: 'Employee management',
        text: 'Track working hours, breaks, and sick leaves via online time clock. Ensure accurate payments & tax calculations.',
        svg: EmployeeManagment
    },
    {
        id: 4,
        title: 'Unified online workspace',
        text: 'Create, edit, and share all your documents and files in a single and secure space using Bitrix.Drive.',
        svg: OnlineWorkspace
    },
    {
        id: 5,
        title: 'Online sales and marketing',
        text: 'Take orders & accept payments online directly from your CRM. Run marketing campaigns + track actionable metrics.',
        svg: OnlineSales
    },
    {
        id: 6,
        title: 'Available on multiple platforms',
        text: 'Use Bitrix24 in your browser or download our desktop app for a more convenient experience. Get our mobile app to use Bitrix24 on the go.',
        svg: MultiPlatforms
    },
]