import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentCardComponent } from './comment-card.component';
import { By } from '@angular/platform-browser';

describe('CommentCardComponent', () => {
  let component: CommentCardComponent;
  let fixture: ComponentFixture<CommentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommentCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentCardComponent);
    component = fixture.componentInstance;
    component.comment = {
      name: 'Brad',
      designation: 'AUTHOR',
      commentTimeStamp: '2 MINUTES AGO',
      profileImageUrl: '../assets/profile-pic-new.png',
      replies: 21,
      likes: 123,
      dislikes: 0,
      commentText:
        'So What the German automaker is likely to focus on today is bigger picture. This will be the first we see the Taycan free from any prototype bodywork.',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have card title with name 'Brad'`, () => {
    const nEl = fixture.debugElement.nativeElement;
    expect(nEl.querySelector('div h5').textContent).toContain(
      component.comment.name
    );
  });

  it(`should have designation as 'AUTHOR'`, () => {
    const nEl = fixture.debugElement.nativeElement;
    expect(nEl.querySelector('div h5').textContent).toContain(
      component.comment.designation
    );
  });

  it(`should have last active time stamp as '2 MINUTES AGO'`, () => {
    const nEl = fixture.debugElement.nativeElement;
    expect(nEl.querySelector('div h5').textContent).toContain(
      component.comment.commentTimeStamp
    );
  });

  it(`should have a comment text`, () => {
    const nEl = fixture.debugElement.nativeElement;
    expect(nEl.querySelector('div p').textContent.trim()).toEqual(
      component.comment.commentText
    );
  });

  it(`should have a 4 action buttons`, () => {
    const nEl = fixture.debugElement.nativeElement;
    const links = fixture.debugElement.queryAll(By.css('.link'));
    expect(links[0].nativeElement.textContent).toEqual('REPLY');
    expect(links[1].nativeElement.textContent).toEqual(
      `${component.comment.replies} REPLIES`
    );
    expect(parseInt(links[2].nativeElement.textContent.trim())).toEqual(
      component.comment.likes
    );
    expect(parseInt(links[3].nativeElement.textContent.trim())).toEqual(
      component.comment.dislikes
    );
  });
});
