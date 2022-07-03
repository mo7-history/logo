import { reactive } from 'vue';
import { Logo } from '@/config/constant';

// ===================== TopBar ============================
export const TopBarStore = reactive({
  status: false,
  close() {
    this.status = false;
  },
  open() {
    this.status = true;
  },
});

// ===================== UserInfo ============================
export interface UserInfoType {
  Avatar: string;
  CreateTime: number;
  Email: string;
  NickName: string;
  UserID: string;
  UpdateTime: number;
  Token: string;
}

const UserInfo: UserInfoType = {
  Avatar: Logo,
  CreateTime: 0,
  Email: '',
  NickName: '',
  UserID: '',
  UpdateTime: 0,
  Token: '',
};
export const UserInfoStore = reactive({
  value: UserInfo,
  update(data: UserInfoType) {
    this.value = data;
  },
});

// ===================== Loading ============================
export const LoadingStore = reactive({
  status: false,
  open() {
    this.status = true;
  },
  close() {
    this.status = false;
  },
});
