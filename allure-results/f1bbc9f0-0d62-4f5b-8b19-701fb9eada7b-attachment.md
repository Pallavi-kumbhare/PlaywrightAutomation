# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AdminExcelInterface.spec.ts >> Login Test write excel file 
- Location: tests\AdminExcelInterface.spec.ts:17:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[name="username"]')
    - waiting for navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"

```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - generic:
    - complementary [ref=f4e4]:
      - navigation "Sidepanel" [ref=f4e5]:
        - generic [ref=f4e6]:
          - link [ref=f4e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f4e9]
          - text: 
        - generic [ref=f4e10]:
          - generic [ref=f4e11]:
            - generic [ref=f4e12]:
              - textbox "Search" [ref=f4e15]
              - button "" [ref=f4e16] [cursor=pointer]
            - separator [ref=f4e18]
          - list [ref=f4e19]:
            - listitem [ref=f4e20]:
              - link "Admin" [ref=f4e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f4e25]:
              - link "PIM" [ref=f4e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f4e41]:
              - link "Leave" [ref=f4e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f4e46]:
              - link "Time" [ref=f4e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f4e54]:
              - link "Recruitment" [ref=f4e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f4e62]:
              - link "My Info" [ref=f4e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f4e70]:
              - link "Performance" [ref=f4e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f4e80]:
              - link "Dashboard" [ref=f4e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f4e85]:
              - link "Directory" [ref=f4e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f4e90]:
              - link "Maintenance" [ref=f4e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f4e96]:
              - link "Claim" [ref=f4e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f4e105]:
              - link "Buzz" [ref=f4e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f4e110]:
      - generic [ref=f4e111]:
        - generic [ref=f4e112]:
          - text: 
          - heading "Dashboard" [level=6] [ref=f4e114]
        - link [ref=f4e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f4e117] [cursor=pointer]
        - list [ref=f4e123]:
          - listitem [ref=f4e124]:
            - generic [ref=f4e125] [cursor=pointer]:
              - img "profile picture" [ref=f4e126]
              - paragraph [ref=f4e127]: Ankit Pal
              - generic [ref=f4e128]: 
      - navigation "Topbar Menu" [ref=f4e130]:
        - list [ref=f4e131]:
          - button "" [ref=f4e133] [cursor=pointer]
  - generic [ref=f4e135]:
    - generic [ref=f4e137]:
      - generic [ref=f4e139]:
        - generic [ref=f4e141]:
          - generic [ref=f4e142]: 
          - paragraph [ref=f4e143]: Time at Work
        - separator [ref=f4e144]
        - generic [ref=f4e146]:
          - generic [ref=f4e147]:
            - img "profile picture" [ref=f4e149]
            - generic [ref=f4e150]:
              - paragraph [ref=f4e151]: Punched Out
              - paragraph [ref=f4e152]: "Punched Out: Mar 29th at 01:19 PM (GMT 7)"
          - generic [ref=f4e153]:
            - generic [ref=f4e154]: 0h 0m Today
            - button "" [ref=f4e155] [cursor=pointer]
          - separator [ref=f4e157]
          - generic [ref=f4e158]:
            - generic [ref=f4e159]:
              - paragraph [ref=f4e160]: This Week
              - paragraph [ref=f4e161]: Oct 12 - Oct 18
            - generic [ref=f4e162]:
              - generic [ref=f4e163]: 
              - paragraph [ref=f4e164]: 0h 0m
      - generic [ref=f4e168]:
        - generic [ref=f4e170]:
          - generic [ref=f4e171]: 
          - paragraph [ref=f4e172]: My Actions
        - separator [ref=f4e173]
        - generic [ref=f4e175]:
          - generic [ref=f4e176]:
            - button [ref=f4e177] [cursor=pointer]
            - paragraph [ref=f4e183] [cursor=pointer]: (1) Pending Self Review
          - generic [ref=f4e184]:
            - button [ref=f4e185] [cursor=pointer]
            - paragraph [ref=f4e194] [cursor=pointer]: (1) Candidate to Interview
      - generic [ref=f4e196]:
        - generic [ref=f4e198]:
          - generic [ref=f4e199]: 
          - paragraph [ref=f4e200]: Quick Launch
        - separator [ref=f4e201]
        - generic [ref=f4e203]:
          - generic [ref=f4e204]:
            - button "Assign Leave" [ref=f4e205] [cursor=pointer]
            - generic "Assign Leave" [ref=f4e208]:
              - paragraph [ref=f4e209]: Assign Leave
          - generic [ref=f4e210]:
            - button "Leave List" [ref=f4e211] [cursor=pointer]
            - generic "Leave List" [ref=f4e218]:
              - paragraph [ref=f4e219]: Leave List
          - generic [ref=f4e220]:
            - button "Timesheets" [ref=f4e221] [cursor=pointer]
            - generic "Timesheets" [ref=f4e227]:
              - paragraph [ref=f4e228]: Timesheets
          - generic [ref=f4e229]:
            - button "Apply Leave" [ref=f4e230] [cursor=pointer]
            - generic "Apply Leave" [ref=f4e233]:
              - paragraph [ref=f4e234]: Apply Leave
          - generic [ref=f4e235]:
            - button "My Leave" [ref=f4e236] [cursor=pointer]
            - generic "My Leave" [ref=f4e241]:
              - paragraph [ref=f4e242]: My Leave
          - generic [ref=f4e243]:
            - button "My Timesheet" [ref=f4e244] [cursor=pointer]
            - generic "My Timesheet" [ref=f4e247]:
              - paragraph [ref=f4e248]: My Timesheet
      - generic [ref=f4e250]:
        - generic [ref=f4e252]:
          - generic [ref=f4e253]: 
          - paragraph [ref=f4e254]: Buzz Latest Posts
        - separator [ref=f4e255]
        - generic [ref=f4e257]:
          - generic [ref=f4e258]:
            - generic [ref=f4e259] [cursor=pointer]:
              - img "profile picture" [ref=f4e261]
              - generic [ref=f4e262]:
                - paragraph [ref=f4e263]: Ankit sing Pal
                - paragraph [ref=f4e264]: 2026-14-10 05:35 PM
            - separator [ref=f4e265]
            - paragraph [ref=f4e266]: Tugas 4 Selenium Test 1791979503
          - generic [ref=f4e267]:
            - generic [ref=f4e268] [cursor=pointer]:
              - img "profile picture" [ref=f4e270]
              - generic [ref=f4e271]:
                - paragraph [ref=f4e272]: Ankit sing Pal
                - paragraph [ref=f4e273]: 2020-08-10 09:08 AM
            - separator [ref=f4e274]
            - paragraph [ref=f4e275]: "Hi All; Linda has been blessed with a baby boy! Linda: With love, we welcome your dear new baby to this world. Congratulations!"
          - generic [ref=f4e276]:
            - generic [ref=f4e277] [cursor=pointer]:
              - img "profile picture" [ref=f4e279]
              - generic [ref=f4e280]:
                - paragraph [ref=f4e281]: Sania Shaheen
                - paragraph [ref=f4e282]: 2020-08-10 09:08 AM
            - separator [ref=f4e283]
            - paragraph [ref=f4e284]: "World Championship: What makes the perfect snooker player? Mark Selby: Robertson has one of the best techniques in the game. It is very, very straight and he fully commits to every single shot he plays. John Higgins: Every shot is repetitive. He always keeps the same technique and cues through the ball bang straight. Barry Hawkins: Robertson is textbook with his grip and has a ramrod solid cue action, delivering it in a straight line. Honourable mentions: Shaun Murphy, Ding Junhui, Jack Lisowski."
          - generic [ref=f4e285]:
            - generic [ref=f4e286] [cursor=pointer]:
              - img "profile picture" [ref=f4e288]
              - generic [ref=f4e289]:
                - paragraph [ref=f4e290]: Rebecca Harmony
                - paragraph [ref=f4e291]: 2020-08-10 09:04 AM
            - separator [ref=f4e292]
            - paragraph [ref=f4e293]: Throwback Thursdays!!
          - generic [ref=f4e295]:
            - generic [ref=f4e296] [cursor=pointer]:
              - img "profile picture" [ref=f4e298]
              - generic [ref=f4e299]:
                - paragraph [ref=f4e300]: Russel Hamilton
                - paragraph [ref=f4e301]: 2020-08-10 09:03 AM
            - separator [ref=f4e302]
            - paragraph [ref=f4e303]: Live SIMPLY Dream BIG Be GREATFULL Give LOVE Laugh LOT.......
      - generic [ref=f4e305]:
        - generic [ref=f4e306]:
          - paragraph [ref=f4e311]: Employees on Leave Today
          - generic [ref=f4e312] [cursor=pointer]: 
        - separator [ref=f4e313]
        - generic [ref=f4e315]:
          - img "No Content" [ref=f4e316]
          - paragraph [ref=f4e317]: No Employees are on Leave Today
      - generic [ref=f4e319]:
        - generic [ref=f4e321]:
          - generic [ref=f4e322]: 
          - paragraph [ref=f4e323]: Employee Distribution by Sub Unit
        - separator [ref=f4e324]
        - list [ref=f4e329]:
          - listitem [ref=f4e330] [cursor=pointer]:
            - generic "Engineering" [ref=f4e332]
          - listitem [ref=f4e333] [cursor=pointer]:
            - generic "Human Resources" [ref=f4e335]
          - listitem [ref=f4e336] [cursor=pointer]:
            - generic "Administration" [ref=f4e338]
          - listitem [ref=f4e339] [cursor=pointer]:
            - generic "Client Services" [ref=f4e341]
          - listitem [ref=f4e342] [cursor=pointer]:
            - generic "Unassigned" [ref=f4e344]
      - generic [ref=f4e346]:
        - generic [ref=f4e348]:
          - generic [ref=f4e349]: 
          - paragraph [ref=f4e350]: Employee Distribution by Location
        - separator [ref=f4e351]
        - list [ref=f4e356]:
          - listitem [ref=f4e357] [cursor=pointer]:
            - generic "Texas R&D" [ref=f4e359]
          - listitem [ref=f4e360] [cursor=pointer]:
            - generic "New York Sales Office" [ref=f4e362]
          - listitem [ref=f4e363] [cursor=pointer]:
            - generic "Unassigned" [ref=f4e365]
    - generic [ref=f4e366]:
      - paragraph [ref=f4e367]: OrangeHRM OS 5.9
      - paragraph [ref=f4e368]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e369] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import { type Page, type Locator, expect } from '@playwright/test';
  2  | import { HomePage } from './HomePage.js';
  3  | 
  4  | 
  5  | 
  6  | export class LoginPage extends HomePage{
  7  | 
  8  |     private readonly username: Locator;
  9  |     readonly password: Locator;
  10 |     readonly loginButton: Locator;
  11 |     readonly username3: Locator;
  12 |     readonly logout : Locator;
  13 | 
  14 |     constructor(page: Page) {
  15 |         super(page);
  16 | 
  17 |         this.username = page.locator('[name="username"]');
  18 |         this.password = page.locator('[name="password"]');
  19 |         this.loginButton = page.locator('[type="submit"]');
  20 |         this.username3 = page.locator('p[class="oxd-userdropdown-name"]');
  21 |         this.logout = page.getByText("Logout");
  22 | 
  23 |     }
  24 | 
  25 |     async login1(userName: string, passWord: string): Promise<void> {
> 26 |         await this.username.fill(userName);
     |                             ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  27 |          await this.password.fill(passWord);
  28 |         await this.loginButton.click();
  29 | 
  30 |         //  await expect(this.page).toHaveTitle('OrangeHRM');
  31 |         //   console.log('true');
  32 |     }
  33 | 
  34 |     
  35 | 
  36 |     async Logout(): Promise<void> {
  37 |         await this.username3.click();
  38 |         await this.logout.click();
  39 |         
  40 |     }
  41 | }
  42 | 
  43 | 
  44 | 
```