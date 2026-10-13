# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AdminTest.spec.ts >> Update username
- Location: tests\AdminTest.spec.ts:6:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Admin' })

```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - generic:
    - complementary [ref=f1e4]:
      - navigation "Sidepanel" [ref=f1e5]:
        - generic [ref=f1e6]:
          - link [ref=f1e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f1e9]
          - text: 
        - generic [ref=f1e10]:
          - generic [ref=f1e11]:
            - generic [ref=f1e12]:
              - textbox "搜索" [ref=f1e15]
              - button "" [ref=f1e16] [cursor=pointer]
            - separator [ref=f1e18]
          - list [ref=f1e19]:
            - listitem [ref=f1e20]:
              - link "管理员" [ref=f1e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f1e25]:
              - link "个人信息管理系统" [ref=f1e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f1e41]:
              - link "休假" [ref=f1e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f1e46]:
              - link "时间" [ref=f1e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f1e54]:
              - link "招聘" [ref=f1e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f1e62]:
              - link "我的信息" [ref=f1e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f1e70]:
              - link "绩效" [ref=f1e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f1e80]:
              - link "仪表盘" [ref=f1e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f1e85]:
              - link "Directory" [ref=f1e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f1e90]:
              - link "Maintenance" [ref=f1e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f1e96]:
              - link "Claim" [ref=f1e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f1e105]:
              - link "激动" [ref=f1e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f1e110]:
      - generic [ref=f1e111]:
        - generic [ref=f1e112]:
          - text: 
          - heading "仪表盘" [level=6] [ref=f1e114]
        - link [ref=f1e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f1e117] [cursor=pointer]
        - list [ref=f1e123]:
          - listitem [ref=f1e124]:
            - generic [ref=f1e125] [cursor=pointer]:
              - img "profile picture" [ref=f1e126]
              - paragraph [ref=f1e127]: Test123 Demo
              - generic [ref=f1e128]: 
      - navigation "Topbar Menu" [ref=f1e130]:
        - list [ref=f1e131]:
          - button "" [ref=f1e133] [cursor=pointer]
  - generic [ref=f1e135]:
    - generic [ref=f1e137]:
      - generic [ref=f1e139]:
        - generic [ref=f1e141]:
          - generic [ref=f1e142]: 
          - paragraph [ref=f1e143]: Time at Work
        - separator [ref=f1e144]
        - generic [ref=f1e146]:
          - generic [ref=f1e147]:
            - img "profile picture" [ref=f1e149]
            - generic [ref=f1e150]:
              - paragraph [ref=f1e151]: Punched Out
              - paragraph [ref=f1e152]: "Punched Out: Today at 06:52 AM (GMT 0)"
          - generic [ref=f1e153]:
            - generic [ref=f1e154]: 0h 16m Today
            - button "" [ref=f1e155] [cursor=pointer]
          - separator [ref=f1e157]
          - generic [ref=f1e158]:
            - generic [ref=f1e159]:
              - paragraph [ref=f1e160]: This Week
              - paragraph [ref=f1e161]: Oct 05 - Oct 11
            - generic [ref=f1e162]:
              - generic [ref=f1e163]: 
              - paragraph [ref=f1e164]: 0h 16m
      - generic [ref=f1e168]:
        - generic [ref=f1e170]:
          - generic [ref=f1e171]: 
          - paragraph [ref=f1e172]: My Actions
        - separator [ref=f1e173]
        - generic [ref=f1e176]:
          - button [ref=f1e177] [cursor=pointer]
          - paragraph [ref=f1e186] [cursor=pointer]: (1) Candidate to Interview
      - generic [ref=f1e188]:
        - generic [ref=f1e190]:
          - generic [ref=f1e191]: 
          - paragraph [ref=f1e192]: Quick Launch
        - separator [ref=f1e193]
        - generic [ref=f1e195]:
          - generic [ref=f1e196]:
            - button "分配休假" [ref=f1e197] [cursor=pointer]
            - generic "分配休假" [ref=f1e200]:
              - paragraph [ref=f1e201]: 分配休假
          - generic [ref=f1e202]:
            - button "休假列表" [ref=f1e203] [cursor=pointer]
            - generic "休假列表" [ref=f1e210]:
              - paragraph [ref=f1e211]: 休假列表
          - generic [ref=f1e212]:
            - button "工时表" [ref=f1e213] [cursor=pointer]
            - generic "工时表" [ref=f1e219]:
              - paragraph [ref=f1e220]: 工时表
          - generic [ref=f1e221]:
            - button "申请休假" [ref=f1e222] [cursor=pointer]
            - generic "申请休假" [ref=f1e225]:
              - paragraph [ref=f1e226]: 申请休假
          - generic [ref=f1e227]:
            - button "我的休假" [ref=f1e228] [cursor=pointer]
            - generic "我的休假" [ref=f1e233]:
              - paragraph [ref=f1e234]: 我的休假
          - generic [ref=f1e235]:
            - button "我的时间表" [ref=f1e236] [cursor=pointer]
            - generic "我的时间表" [ref=f1e239]:
              - paragraph [ref=f1e240]: 我的时间表
      - generic [ref=f1e242]:
        - generic [ref=f1e244]:
          - generic [ref=f1e245]: 
          - paragraph [ref=f1e246]: Buzz Latest Posts
        - separator [ref=f1e247]
        - generic [ref=f1e249]:
          - generic [ref=f1e250]:
            - generic [ref=f1e251] [cursor=pointer]:
              - img "profile picture" [ref=f1e253]
              - generic [ref=f1e254]:
                - paragraph [ref=f1e255]: Test123 Demo
                - paragraph [ref=f1e256]: 2026-06-10 12:43 PM
            - separator [ref=f1e257]
            - paragraph [ref=f1e258]: PLEASE CHANGE TO ENGLISIH, MY EYES CANNOT UNDERSTAND A CHINESE LANGUAGE
          - generic [ref=f1e259]:
            - generic [ref=f1e260] [cursor=pointer]:
              - img "profile picture" [ref=f1e262]
              - generic [ref=f1e263]:
                - paragraph [ref=f1e264]: Test123 Demo
                - paragraph [ref=f1e265]: 2026-06-10 12:05 PM
            - separator [ref=f1e266]
          - generic [ref=f1e268]:
            - generic [ref=f1e269] [cursor=pointer]:
              - img "profile picture" [ref=f1e271]
              - generic [ref=f1e272]:
                - paragraph [ref=f1e273]: Test123 Demo
                - paragraph [ref=f1e274]: 2026-06-10 12:04 PM
            - separator [ref=f1e275]
          - generic [ref=f1e277]:
            - generic [ref=f1e278] [cursor=pointer]:
              - img "profile picture" [ref=f1e280]
              - generic [ref=f1e281]:
                - paragraph [ref=f1e282]: Test123 Demo
                - paragraph [ref=f1e283]: 2026-06-10 11:37 AM
            - separator [ref=f1e284]
            - paragraph [ref=f1e285]: QA Buzz test 1791266824879 kfhdkfghlsghrfg
          - generic [ref=f1e286]:
            - generic [ref=f1e287] [cursor=pointer]:
              - img "profile picture" [ref=f1e289]
              - generic [ref=f1e290]:
                - paragraph [ref=f1e291]: Test123 Demo
                - paragraph [ref=f1e292]: 2020-08-10 09:08 AM
            - separator [ref=f1e293]
            - paragraph [ref=f1e294]: "Hi All; Linda has been blessed with a baby boy! Linda: With love, we welcome your dear new baby to this world. Congratulations!"
      - generic [ref=f1e296]:
        - generic [ref=f1e297]:
          - paragraph [ref=f1e302]: Employees on Leave Today
          - generic [ref=f1e303] [cursor=pointer]: 
        - separator [ref=f1e304]
        - generic [ref=f1e306]:
          - img "profile picture" [ref=f1e308]
          - generic [ref=f1e309]:
            - paragraph [ref=f1e310]: John Automation
            - paragraph [ref=f1e311]: CAN - FMLA
          - paragraph [ref=f1e312]: "0375"
      - generic [ref=f1e314]:
        - generic [ref=f1e316]:
          - generic [ref=f1e317]: 
          - paragraph [ref=f1e318]: Employee Distribution by Sub Unit
        - separator [ref=f1e319]
        - list [ref=f1e324]:
          - listitem [ref=f1e325] [cursor=pointer]:
            - generic "Administration" [ref=f1e327]
          - listitem [ref=f1e328] [cursor=pointer]:
            - generic "Engineering" [ref=f1e330]
          - listitem [ref=f1e331] [cursor=pointer]:
            - generic "Human Resources" [ref=f1e333]
          - listitem [ref=f1e334] [cursor=pointer]:
            - generic "Client Services" [ref=f1e336]
          - listitem [ref=f1e337] [cursor=pointer]:
            - generic "Unassigned" [ref=f1e339]
      - generic [ref=f1e341]:
        - generic [ref=f1e343]:
          - generic [ref=f1e344]: 
          - paragraph [ref=f1e345]: Employee Distribution by Location
        - separator [ref=f1e346]
        - list [ref=f1e351]:
          - listitem [ref=f1e352] [cursor=pointer]:
            - generic "Texas R&D" [ref=f1e354]
          - listitem [ref=f1e355] [cursor=pointer]:
            - generic "New York Sales Office" [ref=f1e357]
          - listitem [ref=f1e358] [cursor=pointer]:
            - generic "Unassigned" [ref=f1e360]
    - generic [ref=f1e361]:
      - paragraph [ref=f1e362]: OrangeHRM OS 5.9
      - paragraph [ref=f1e363]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f1e364] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import type { Page, Locator } from "@playwright/test";
  2  | 
  3  | import { LoginPage } from "./LoginPage.js";
  4  | 
  5  | 
  6  | 
  7  | export class AdminPage extends LoginPage {
  8  |     readonly AdminLink: Locator;
  9  |     readonly userTextbox : Locator;
  10 |     readonly searchButton : Locator;
  11 |     readonly editButton : Locator;
  12 |     readonly userTextbox2 : Locator;
  13 |     readonly saveButton : Locator;
  14 | 
  15 | constructor(page: Page) {
  16 |         super(page);
  17 |        
  18 |         this.AdminLink= page.getByRole('link', { name: 'Admin' });
  19 |         this.userTextbox = page.locator('//input[@class="oxd-input oxd-input--active" and not(@placeholder="Search")]');
  20 |         this.searchButton = page.getByRole('button', { name: 'Search' });
  21 |         this.editButton = page.locator("i[class='oxd-icon bi-pencil-fill']");
  22 |         this.userTextbox2 = page.locator('xpath=//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[4]/div/div[2]/input');
  23 |         this.saveButton = page.locator('button[type= "submit"]');
  24 | }
  25 | async adminbutton(): Promise<void> {
  26 |        
> 27 |         await this.AdminLink.click();
     |                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  28 |     }
  29 | 
  30 | async searchUser(userName: string): Promise<void> {
  31 | 
  32 |     await this.userTextbox.fill(userName);
  33 |     await this.searchButton.click();
  34 | 
  35 | }
  36 | 
  37 | async editUserName(username2: string): Promise<void> {
  38 |     await this.editButton.first().click();
  39 |     await this.userTextbox2.fill(username2);
  40 |     await this.saveButton.click();
  41 | 
  42 | 
  43 | }
  44 | 
  45 | 
  46 | }
  47 | 
```